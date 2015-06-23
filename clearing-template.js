
(function () {
	function stageTemplate(ctx) {
		var transposeCells = function(tbl) {
			var cells = tbl.match(/\<td\>(.+?)\<\/td\>/g).join("");
			cells = cells.replace(/\<td[ ]*/g, '<td style="padding-right:18px" ');
			tbl = tbl.replace(/\<tr\>(.+?)\<\/tr\>/g,"");
			tbl = tbl.replace(/cellspacing=\"[0-9]+\"/, '');
			// tbl = tbl.replace("<table ",'<table style="border-collapse:separate;border-spacing:9px 0" ');
			tbl = tbl.substring(0, tbl.indexOf("</table>"))+"<tr>" + cells + '</tr>' + tbl.substr(tbl.indexOf("</table>"));
			return tbl;		
		}
		
		var output="";
		var stage = (ctx.BaseViewID=="NewForm" ? "1" :  ctx.ListData.Items[0].Offer_x0020_Stage.toString());
		
		if (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["required"] 
				&& fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]==parseInt(stage)) {		
			var formCtx = SPClientTemplates.Utility.GetFormContextForCurrentField(ctx);

			//Create container for various validations
			var validators = new SPClientForms.ClientValidation.ValidatorSet();
			validators.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator());

			formCtx.registerClientValidator(formCtx.fieldName, validators);	
		}
		
		 switch (ctx.CurrentFieldSchema.FieldType) {
			case "Note":
			// if (ctx.CurrentFieldValue!="") prepareNoteFieldValue(ctx);
			output = (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage) ? SPFieldNote_Edit(ctx) : SPFieldNote_Display(ctx));
			break;
			
			case "Lookup":
			case "LookupMulti":
			output =  (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage) ? SPFieldLookup_Edit(ctx) : SPFieldLookup_Display(ctx));
			break;
			
			case 'Choice':
			if (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage)) {
				var choice = SPFieldChoice_Edit(ctx);			
				output = (choice.search(/(\_\$DropDownChoice|\_\$FillInChoice)/)!=-1 ? choice : transposeCells(choice));
			} else {
				output = SPField_FormDisplay_Default(ctx);
			}

			// return (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage) ? SPFieldChoice_Edit(ctx) : SPField_FormDisplay_Default(ctx));
			break;
			
			case 'MultiChoice':
			if (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage)) {
				var choice = SPFieldMultiChoice_Edit(ctx);
				output = (choice.search(/(\_\$DropDownChoice|\_\$FillInChoice)/)!=-1 ? choice : transposeCells(choice));
				// output = (choice.search("<select ")!=-1 ? choice : transposeCells(choice));

			} else {
				var choices =  SPField_FormDisplay_Default(ctx).replace(/^\;\#/, '').replace(/\;\#$/,'').split(';#');
				output = choices.join("<br />");
			}

			// return (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage) ? SPFieldMultiChoice_Edit(ctx) : SPField_FormDisplay_Default(ctx));
			break;
			
			case 'Boolean':
			output =  (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage) ? SPFieldBoolean_Edit(ctx) : SPField_FormDisplay_DefaultNoEncode(ctx));
			break;
			
			case 'Text':
			output =  (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage) ? SPFieldText_Edit(ctx) : SPField_FormDisplay_Default(ctx));
			break;
			
			case 'DateTime':
			output =  (fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]>=parseInt(stage) ? SPFieldDateTime_Edit(ctx) : SPFieldDateTime_Display(ctx));
			break;
		}	 

		 return '<span data-stage="'+fields_iuc78etk9w[ctx.CurrentFieldSchema.Name]["stage"]+'">'+output+'</span>';
		//return output;
	}
    // Create object that have the context information about the field that we want to change it's output render 


	var ctxClearing = {};
	if (location.search.search(/[\?\&]allstages=y/)==-1) {
		ctxClearing.Templates = {};
		ctxClearing.Templates.Fields = new Object();
		for (var fld in fields_iuc78etk9w) {
			ctxClearing.Templates.Fields[fld.toString()] = {"NewForm": stageTemplate, "EditForm": stageTemplate};
		}

		SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctxClearing);		
	}


})();


