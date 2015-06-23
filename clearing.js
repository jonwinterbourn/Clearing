var fields_iuc78etk9w = {
	"Programme" : {"required": true, "stage": 1},
	"Applicant_x0020_fee_x0020_status" : {"required": true, "stage": 1},
	"Qualifications" : {"required": true, "stage": 1},
	"GCSE" : {"required": false, "stage": 1},
	"EnglishGCSE" : {"required": true, "stage": 1},
	"MathsGCSE" : {"required": true, "stage": 1},
	"GCSEMeetsRequirements" : {"required": true, "stage": 1},
	"GCSE_x002f_equiv_x0020_notes_x00" : {"required": false, "stage": 1},
	"English_x0020_proficiency_x0020_" : {"required": false, "stage": 1},
	"Name_x0020_of_x0020_applicant_x0" : {"required": true, "stage": 1},
	"Name_x0020_of_x0020_applicant_x00" : {"required": true, "stage": 1},
	"Title" : {"required": true, "stage": 1},  // Applicant UCAS ID
	"Telephone_x0020_number" : {"required": false, "stage": 1},
	"Email_x0020_address" : {"required": true, "stage": 1},
	"dob" : {"required": true, "stage": 1},
	"In_x0020_Clearing_x003f_" : {"required": true, "stage": 1, "columns": 3},
	//"Registered_x0020_for_x0020_Adjus" : {"required": true, "stage": 1}, // JW removed this as it's no longer in the list
	"Phone_x0020_Operator_x0020_notes" : {"required": false, "stage": 1},
	"Visible_x0020_in_x0020_weblink_x" : {"required": true, "stage": 2},
	"IDConfirmation" : {"required": false, "stage": 2},
	"UCAS_x0020_status_x003f_" : {"required": false, "stage": 2},
	"Fee_x0020_status_x003f_" : {"required": false, "stage": 2},
	"OverseasPreviousHE" : {"required": false, "stage": 2},
	"On_x0020_CCO_x0020_list_x003f_" : {"required": false, "stage": 2},
	"Will_x0020_the_x0020_applicant_x" : {"required": false, "stage": 2},
	"Overseas" : {"required": false, "stage": 2},
	// "If_x0020_the_x0020_applicant_x00" : {"required": false, "stage": 2},
	// "If_x0020_the_x0020_applicant_x000" : {"required": false, "stage": 2},
	"Disability_x003f_" : {"required": false, "stage": 2},
	"Criminal_x0020_conviction_x003f_" : {"required": false, "stage": 2},
	// "Qualifications_x0020_suitable_x0" : {"required": false, "stage": 2},
	// "Qualifications_x0020_verified_x0" : {"required": false, "stage": 2},
	"QualificationsSuitable" : {"required": false, "stage": 2},
	"QualificationsVerified" : {"required": false, "stage": 2},
	"GCSE_Requirements" : {"required": false, "stage": 2},
	"EngProficiencySuitable" : {"required": false, "stage": 2},
	"English_Prof_Verification" : {"required": false, "stage": 2},
	// "English_x0020_GCSE_x0020_meet_x0" : {"required": false, "stage": 2},
	// "Maths_x0020_GCSE_x0020_meet_x002" : {"required": false, "stage": 2},
	// "English_x0020_proficiency_x0020_0" : {"required": false, "stage": 2},
	// "English_x0020_proficiency_x0020_1" : {"required": false, "stage": 2},
	// "Reference_x0020_suitable_x003f_" : {"required": false, "stage": 2},
	// "Original_x0020_reference_x0020_r" : {"required": false, "stage": 2},
	"Reference_Verification" : {"required": false, "stage": 2},
	"Email_x0020_address_x0020_from_x" : {"required": false, "stage": 2},
	"Email_x0020_template_x0020_to_x0" : {"required": false, "stage": 2},
	"Conditions_x0020_of_x0020_offer_" : {"required": false, "stage": 2},
	"Verifier_x0020_notes" : {"required": false, "stage": 2},
	"NonAcademicRequirements" : {"required": false, "stage": 2},
	"Email_x0020_address_x002f_es_x00" : {"required": false, "stage": 3},
	"Date_x0020_and_x0020_time_x0020_" : {"required": true, "stage": 3},
	"Deadline_x0020_given_x0020_in_x0" : {"required": true, "stage": 3},
	"Emailer_x0020_notes" : {"required": false, "stage": 3},
	"Non_x002d_academic_x0020_require" : {"required": false, "stage": 2},
	"Applicant_x0020_response" : {"required": false, "stage": 4},
	"Date_x0020_and_x0020_time_x0020_0" : {"required": false, "stage": 4},
	"Extension_x0020_granted_x003f_" : {"required": false, "stage": 4},
	"Weblink_x0020_referral_x003f_" : {"required": false, "stage": 4},
	"Registered_x0020_for_x0020_Open_" : {"required": false, "stage": 4},
	"Open_x0020_Day_x0020_date" : {"required": false, "stage": 4},
	"Contacted_x0020_by_x0020_outgoin" : {"required": false, "stage": 4},
	"Email_x0020_bounced_x003f_" : {"required": false, "stage": 4},
	"If_x0020_email_x0020_bounced_x00" : {"required": false, "stage": 4},
	"Duplicate_x0020_in_x0020_list" : {"required": false, "stage": 4},
	"Withdrawn" : {"required": false, "stage": 4},
	"Banner_x0020_ID_x0020__x0028_acc" : {"required": false, "stage": 4},
	"UA_x0020_processed_x003f_" : {"required": false, "stage": 4},
	"Additional_x0020_notes" : {"required": false, "stage": 4},
};

_spBodyOnLoadFunctionNames.push("init_iuc78etk9w");

function init_iuc78etk9w() {
	var displayProgrammeDetail = function(evt) {
		var elm = evt.target;
		
		if ($(elm).val()>0) {
			$(elm).next('span').text(
				$(elm).find("option:selected").data(
					$(elm).data("listedby")=="code" ? "title" : "code"
				)
			);			
		} else {
			$(elm).next('span').text("");
		}
	}
	
	var toggleProgrammeSelect = function(evt) {
		var selProgramme = $('select[id^="Programme_"]');
		
		selProgramme.off("change click", displayProgrammeDetail);
		
		selProgramme.val(0); selProgramme.next('span').text("");
		
		var listedby = (selProgramme.data("listedby")=="code"?"title":"code");
		$(evt.target).val((listedby=="title" ? "Code List" : "Title List"));
		selProgramme.data("listedby",listedby);
		selProgramme.css("width", (listedby=="code" ? "6em" : "12em"));

		var optlist = selProgramme.find('option');
		optlist.sort(
			function(a, b) {
				if ($(a).index()<1 || $(b).index()<1) {
					return ($(a).index() > $(b).index() ? 1 : -1);												
				} else {
					return ($(a).data(listedby) > $(b).data(listedby) ? 1 : -1);						
				}
			}
		).each(
			function(idx, elm) {
				if (idx>0) $(elm).text($(elm).data(listedby));
			}
		);
		selProgramme.find('option').remove();
		selProgramme.append(optlist);
		
		selProgramme.on("change click", displayProgrammeDetail);
	}
	
	var toggleStageVisibility = function(evt) {
		var elm = evt.target;
		
		if ($(elm).data("state")=="expanded") {
			$(elm).data("state", "collapsed");
			$(elm).val("Show");
			$('span[data-stage="'+$(elm).data('stage').toString()+'"]').closest("tr").hide();
		} else {
			$(elm).data("state", "expanded");
			$(elm).val("Hide");
			$('span[data-stage="'+$(elm).data('stage').toString()+'"]').closest("tr").show();						
		}		
	}
// Current stage stored in stage field	
	$("input[id^='Offer_x0020_Stage_']").closest("tr").hide();
	
	var stage = parseInt($("input[id^='Offer_x0020_Stage_']").val());
	
	for (var fld in fields_iuc78etk9w) {
		if (fields_iuc78etk9w[fld]["required"]) {
			$('<span></span>').addClass('ms-accentText').text('*').appendTo($('[id^="'+fld+'_"]').closest("td").prev("td").find("h3")) ;
		}
		if (location.search.search(/[\?\&]allstages=y/)==-1) {
			if (fields_iuc78etk9w[fld]["stage"]>parseInt(stage)) {
				$('[id^="'+fld+'_"]').closest("tr").hide();
			}					
		}
	}
	
	for (var x=1; x<=stage; x++) {
		var toprow = $('span[data-stage="'+x.toString()+'"]').eq(0).closest("tr");
		
		$("<tr></tr>").attr('title',"Stage "+x.toString()).css({
			"font-weight": "bold",
			"background-color": "#e0e0e0",
			"margin-bottom": "12pt"
		}).insertBefore(toprow);
		$('<td></td>').css('padding','6px').text("Stage "+x.toString()).appendTo(toprow.prev("tr"));
		$('<td></td>').css({'padding':'6px','text-align':'right'}).appendTo(toprow.prev("tr"));
		
		if (x<stage) {
			$('span[data-stage="'+x.toString()+'"]').closest("tr").hide();
			$('<input type="button" />').val("Show").data({"state":"collapsed", "stage": x}).click(toggleStageVisibility).appendTo(toprow.prev("tr").children("td:eq(1)"));
			
			$('span[data-stage="'+x.toString()+'"]').next(".ms-metadata").hide();			
		}
	}
	
	$('span[data-stage] table').css("margin","0");
	
	var selProgramme = $('select[id^="Programme_"]');
	if (selProgramme.length>0) {
		selProgramme.data("listedby", "code");
		selProgramme.find('option').each(
			function(idx, elm) {
				if (idx>0)  {
					var display = $(elm).text().split("--");
// .data does not write attribute, so value will be lost when option items are copied to variable for sorting					
/* 					$(elm).data({
						"code": display[0],
						"title": display[1]
					}); */
					$(elm).attr("data-code", display[0]);
					$(elm).attr("data-title", display[1]);
					$(elm).text($(elm).data(selProgramme.data("listedby")));				
				}		
			}
		);
		selProgramme.css("width", "6em");
		$('<input type="button"/>').val("Title List").click(toggleProgrammeSelect).insertAfter(selProgramme);
		
		$("<span></span>").css("margin-left","12px").insertAfter(selProgramme);		
		
		selProgramme.on("change click", displayProgrammeDetail);
	}
	
	$("td.ms-formlabel, td.ms-formbody").removeAttr("vAlign").css({"padding-bottom":"9px","padding-top":"9px", "padding-left":"6px"});
	$(".ms-formlabel").closest("td").removeAttr('width').css("width", "17em");
	$(".ms-formlabel").closest("tr").css("vertical-align","top");
//	$(".ms-formlabel").closest("table").removeAttr('cellspacing').removeAttr('cellpadding').css({"border-collapse":"separate","border-spacing":"6px"});
	$(".ms-formlabel").closest("table").find("tr:nth-child(even)").not(':first').css("background-color","#efeff6");
	$(".ms-formlabel h3").css({"line-height":"21px"});
	$(".ms-formlabel h3 nobr").css({"white-space":"normal"});
	// $(".ms-formbody").closest("td").removeAttr("width");
	// $(".ms-formbody").children('span').last().css("margin-bottom","24px");
	$("select[id$='DateTimeFieldDateHours'],select[id$='DateTimeFieldDateMinutes']").removeAttr('width').css("width", "75px");

	// Next stage now stored in stage field	
	$("input[id^='Offer_x0020_Stage_']").val((stage+1).toString());
}