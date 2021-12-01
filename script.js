$(document).ready(function(){
    $("#dateOfBirthPrin").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true
    });

    $("#dateOfBirthBc").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true
    });



    let state = {
                 "AK" : "Alaska",
                 "AL" : "Alabama",
                 "AR" : "Arkansas",
                 "AZ" : "Arizona",
                 "CA" : "California",
                 "CO" : "Colorado",
                 "CT" : "Connecticut",
                 "DC" : "Washington, D.C.",
                 "DE" : "Delaware",
                 "FL" : "Florida",
                 "GA" : "Georgia",
                 "GU" : "Guam",
                 "HI" : "Hawaii",
                 "IA" : "Iowa",
                 "ID" : "Idaho",
                 "IL" : "Illinois",
                 "IN" : "Indiana",
                 "KS" : "Kansas",
                 "KY" : "Kentucky",
                 "LA" : "Louisiana",
                 "MA" : "Massachusetts",
                 "MD" : "Marryland",
                 "ME" : "Maine",
                 "MI" : "Michigan",
                 "MN" : "Minnesota",
                 "MO" : "Missour",
                 "MP" : "Northern Mariana Islands",
                 "MS" : "Mississippi",
                 "MT" : "Montana",
                 "NC" : "North Carolina",
                 "ND" : "North Dakota",
                 "NE" : "Nebraska",
                 "NH" : "New Hampshire",
                 "NJ" : "New Jersey",
                 "NM" : "New Maxico",
                 "NV" : "Navada",
                 "NY" : "New York",
                 "OH" : "Ohio",
                 "OK" : "Oklahoma",
                 "OR" : "Oragon",
                 "PA" : "Pennsylvania",
                 "PR" : "Puerto Rico",
                 "RI" : "Rhode Island",
                 "SC" : "South Carolina",
                 "SD" : "South Dakota",
                 "TN" : "Tennesee",
                 "TX" : "Texas",
                 "UT" : "Utah",
                 "VA" : "Virginia",
                 "VI" : "Virgin Islands",
                 "VT" : "Vermont",
                 "WA" : "Washington",
                 "WI" : "Wisconsin",
                 "WV" : "West Verginia",
                 "WY" : "Wyoming"
    }

    let stateHtml = '';
    for(const number in state){
        stateHtml += `<option value=${number}>${state[number]}</option>`;              
    }
    
  $(".form-state").append(stateHtml);  

// getting data from top 3 fields
    function dataCollection(){
        let mainData = {};
        mainData["data"]={};
        mainData["data"]["application"]={
        "agent":$('#apiFormAgentId').val(),
        "applicationName":$('#apiFormApplicationName').val(),
        "externalKey":$('#apiExternalkey').val()
    };

// equipment array data block 
      let  equpData = [];
      $(".equipment-content-div").each(function(formIndex, form){
          equpData.push({
              "equipmentId":$(form).find('.equipment-class').val(),
              "quantity": $(form).find('.quantity-class').val(),
          })
      }) 

    mainData["data"]["application"]["plane"]={
        "planId":$('#applicationPlanId').val(),
        "equipment": equpData,
        "equipmentCostToMerchant":$('#planEquipmentCostToMerchant').val(),
        "accountSetupFee":$('#planAccountSetupFee').val(),
        "discountFrequency":$('#planDiscountFrequency').val()
    };   


    mainData["data"]["application"]["shipping"]={
        "deliveryMethod":$('#deliveryMethod').val(),
        "shippingDestination":$('#shippingDestination').val()
    };

    mainData["data"]["application"]["principals"]=[{

        'street':$('#streetPrin').val(),
        'street2':$('#street2Prin').val(),
        'city':$('#cityPrin').val(),
        'state':$('#statePrin').val(),
        'zipCode':$('#zipCodePrin').val(),
        'firstName':$('#firstNamePrin').val(),
        'lastName':$('#lastNamePrin').val(),
        'socialSecurityNumber':$('#socialSecurityNumberPrin').val(),
        'dateOfBirth':$('#dateOfBirthPrin').val(),
        'phoneNumber':$('#phoneNumberPrin').val(),
        'email':$('#emailPrin').val(),
        'equityOwnershipPercentage':$('#equityOwnershipPercentage').val(),
        'title':$('#titlePrin').val(),
        'isPersonalGuarantor':$('#flexRadioDefault1').is(':checked'),
        'driverLicenseNumber':$('#driverLicenseNumber').val(),
        'driverLicenseIssuedState':$('#driverLicenseIssuedState').val()        
    },
    {
        'street':$('#streetPrin').val(),
        'street2':$('#street2Prin').val(),
        'city':$('#cityPrin').val(),
        'state':$('#statePrin').val(),
        'zipCode':$('#zipCodePrin').val(),
        'firstName':$('#firstNamePrin').val(),
        'lastName':$('#lastNamePrin').val(),
        'socialSecurityNumber':$('#socialSecurityNumberPrin').val(),
        'dateOfBirth':$('#dateOfBirthPrin').val(),
        'phoneNumber':$('#phoneNumberPrin').val(),
        'email':$('#emailPrin').val(),
        'equityOwnershipPercentage':$('#equityOwnershipPercentage').val(),
        'title':$('#titlePrin').val(),
        'isPersonalGuarantor':$('#isPersonalGuarantor').val(),
        'driverLicenseNumber':$('#driverLicenseNumber').val(),
        'driverLicenseIssuedState':$('#driverLicenseIssuedState').val()        
    }];

// websites array data block 
    let  allWebsites = [];
    $(".ref-class").each(function(formIndex, form){
        allWebsites.push({
            "url":$(form).find('#url').val(),
            "websiteCustomerServiceEmail": $(form).find('#websiteCustomerServiceEmail').val(),
            "websiteCustomerServicePhoneNumber": $(form).find('#websiteCustomerServicePhoneNumber').val(),
        })
    }) 

    mainData["data"]["application"]["business"]={
        'corporateName':$('#corporateName').val(),
        'dbaName':$('#dbaName').val(),
        'businessType':$('#businessType').val(),
        'federalTaxIdNumber':$('#federalTaxIdNumber').val(),
        'federalTaxIdType':$('#federalTaxIdType').val(),
        'mcc':$('#mcc').val(),
        'phone':$('#phoneBusiness').val(),
        'email':$('#emailBusiness').val(),
        'websites': allWebsites,
        'statementDeliveryMethod':$('#statementDeliveryMethod').val(),
        'averageTicketAmount':$('#averageTicketAmount').val(),
        'averageMonthlyVolume':$('#averageMonthlyVolume').val(),
        'highTicketAmount':$('#highTicketAmount').val(),
        'merchandiseServicesSold':$('#merchandiseServicesSold').val()
    };


    mainData["data"]["application"]["business"]["percentOfBusinessTransactions"]={
        'cardSwiped':$('#cardSwiped').val(),
        'keyedCardPresentNotImprinted':$('#keyedCardPresentNotImprinted').val(),
        'mailOrPhoneOrder':$('#mailOrPhoneOrder').val(),
        'internet':$('#internet').val()
    };

    mainData["data"]["application"]["business"]["ebt"]={
        // 'isPersonalGuarantor':$('#flexRadioDefault1').is(':checked'),
        'ebtFood':$('#ebtFoodYes').is(':Checked'),
        'ebtCash':$('#ebtCashYes').is(':Checked'),
        'ebtAccountNumber':$('#ebtAccountNumber').val()
    };
    mainData["data"]["application"]["business"]["businessContact"]={
        'firstName':$('#firstNameBc').val(),
        'lastName':$('#lastNameBc').val(),
        'socialSecurityNumber':$('#socialSecurityNumberBc').val(),
        'dateOfBirth':$('#dateOfBirthBc').val(),
        'street':$('#streetBc').val(),
        'street2':$('#street2Bc').val(),
        'zipCode':$('#zipCodeBc').val(),
        'city':$('#cityBc').val(),
        'state':$('#formStateBc').val(),
        'phoneNumber':$('#phoneNumberBc').val(),
        'email':$("#emailBc").val()
    };

    mainData["data"]["application"]["business"]["businessAddress"]={};

      mainData["data"]["application"]["business"]["businessAddress"]["dba"]={
        'street':$('#streetDba').val(),
        'street2':$('#street2Dba').val(),
        'city':$('#cityDba').val(),
        'state':$('#stateDba').val(),
        'zipCode':$('#zipCodeDba').val()
       };

       mainData["data"]["application"]["business"]["businessAddress"]["corporate"]={
        'street':$('#streetCorporate').val(),
        'street2Corporate':$("#street2Corporate").val(),
        'city':$('#cityCorporate').val(),
        'state':$('#stateCorporate').val(),
        'zipCode':$('#zipCodeCorporate').val()
       };

       mainData["data"]["application"]["business"]["businessAddress"]["shipTo"]={
        'street':$('#streetShipTo').val(),
        'city':$('#cityShipTo').val(),
        'state':$('#stateShipTo').val(),
        'zipCode':$('#zipCodeShipTo').val()
       };

    mainData["data"]["application"]["bankAccount"]={
        'abaRouting':$('#abaRouting').val(),
        'accountType':$('#accountType').val(),
        'demandDepositAccount':$('#demandDepositAccount').val()
    };

   
    mainData["data"]["application"]["epxHierarchy"]={
        'corporateId':$('#corporateId').val(),
        'divisionId':$('#divisionId').val(),
        'createCorporate':$('#CreateCorporateYes').is(':Checked'),
        'createDivision':$('#CreateDivisionYes').is(':Checked')
    };

    
    console.log(mainData);
     
    };

    $(document).on("click","#submitBtn",dataCollection);

 // this is the code for the email-validation 

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    $(document).on("input",".email-validation", function(){
        let email = $(this).val();
        if(regex.test(email)){
            $(this).parent().find('.span-class').text('email is valid');
            $(this).parent().find('.span-class').css('color','lime')
        }
        else{
            $(this).parent().find('.span-class').text('email is invalid');
            $(this).parent().find('.span-class').css('color','red')
        }
    })

    
 // this is the code for the second email-validation 
    $(document).on("input",".email-validation2", function(){
        let email = $(this).val();
        if(regex.test(email)){
            $(this).parent().find('.span2-class').text('email is valid');
            $(this).parent().find('.span2-class').css('color','lime')
        }
        else{
            $(this).parent().find('.span2-class').text('email is invalid');
            $(this).parent().find('.span2-class').css('color','red')
        }
    })

 // this is the code for the bussiness-contact email-validation 
    $(document).on("input","#emailBc", function(){
        let email = $(this).val();
        if(regex.test(email)){
            $(this).parent().find('#span_5').text('email is valid');
            $(this).parent().find('#span_5').css('color','lime')
        }
        else{
            $(this).parent().find('#span_5').text('email is invalid');
            $(this).parent().find('#span_5').css('color','red')
        }
    })

// this is the code for the append child in the equipment section 
function equipmentChild(eqNum){
    return `<div class="equipment-content-div">
            <div class="col-12">
            <div class="row">
            <div class="remove-btn-div"><button type="button" class="btn btn-danger remove-btn">Delete</button></div>
            <div class="col-md-8"><h2 class="text-left1">Equipment ${eqNum} </h2></div>                
            </div>

        <div class="row">
            <div class="mb-4 col-6">
            <label class="form-label">Equipment Id:</label>                
            <input  type="text" id="equipmentId" class="form-control equipment-class forOnlyNumbers"/>               
            </div>

            <div class="mb-4 col-6">
            <label class="form-label">Total number of quantity for equipment:</label>                
            <input type="text" id="totalEquipmentQuant" value = "1" class="form-control quantity-class forOnlyNumbers"/>                
            </div>
        </div>

        </div> 
      
      </div>`;
}


    $(document).on('click','#addEquipmentBtn', function(){
        let eqNum = $('.equipment-content-div').length; 
        // let html = equipmentChild;
        $(this).parent().parent().parent().append(equipmentChild(eqNum+2));
    });


// this is the code for remove the append child when the user tap on remove button 
    $(document).on('click','.remove-btn',function(){
        $(this).parent().parent().parent().parent().remove();
    });

// this is the code for the append child in the equipment section 
    function websiteChild(numIncre){
        return `
        <div class="row ref-class" id="websiteDiv">
        <div class="remove-btn-div"><button type="button" class="btn btn-danger remove-btn2">Delete</button></div>
          <h2 class="text-left1">Website ${numIncre}</h2>                   
     
          <div class="mb-4 col-4">              
            <label class="form-label">URL:</label>
            <input type="text" class="form-control" id="url" />                 
          </div>   

          <div class="mb-4 col-4">              
            <label class="form-label">Website Customer Service Email:</label>
            <input type="text" class="form-control" id="websiteCustomerServiceEmail" />                 
          </div>  

          <div class="mb-4 col-4">              
            <label class="form-label">Website Customer Service PhoneNumber:</label>
            <input type="text" class="form-control" id="websiteCustomerServicePhoneNumber" />                 
          </div>  
      </div>`
      
    }
    $(document).on('click', '#addWebsiteBtn', function(){
        let numIncre = $('.ref-class').length;
        $(this).parent().parent().append(websiteChild(numIncre+1));

    });

    $(document).on('click', '.remove-btn2', function(){
     
        $(this).parent().parent().remove();

    });

    
    $(document).on('change','#shippingDestination', function(){
        
        if($(this).val() == 5){
            $(this).css('border-color', 'red')
            $(this).parent().parent().parent().find(".shipToExample").css('border-color', 'red')
            $(this).parent().find('#shipToSpan').text('please fill the ship to property with in bussiness address block')
            // $(document).scrollDown(50)
        }   
        else {
            $(this).css('border-color', '')
            $(this).parent().parent().parent().find(".shipToExample").css('border-color', '')
            $(this).parent().find('#shipToSpan').text('')
        }     
    });

// this is the code for phone number validation using jquery
                    // and      
// Function for integer number validation
  $(document).on('keydown', '.number-field', function (e) {
    // Allow backspace, delete, tab, escape,enter
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) != -1 ||
      // Allow ctrl+C, ctrl+V, command+C, command+v
      ((e.keyCode == 67 || e.keyCode == 86) && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow ctrl+A, Command+A
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home,end,left,right,down,up
      (e.keyCode >= 35 && e.keyCode <= 40)) {
      return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });


// restrict user to enter only value upto 100 for card-swiped section
$('.upto-100-only').on('input', function(){
    var min = parseInt($(this).attr('min'));
    var max = parseInt($(this).attr('max'));
    var val = $(this).val();
    (val < 1) ? $(this).val(min) : $(this).val();
    (val > 100) ? $(this).val(max) : $(this).val();

});


});

// jquary block ends here

(function(){
    document.addEventListener("keyup", function(event){
       
        if(event.target.matches("#apiFormApplicationName")){
            let value = event.target.value;
            let valueLength = event.target.value.length;            
            let maxChars = 255;
            let RemainingChars = maxChars - valueLength;
            if(valueLength > maxChars){
                event.target.value  = value.substr(0,maxChars);
                return;
            }
            document.getElementById('remainingText').innerHTML = `${RemainingChars} Remaining Characters`         
        }

        if(event.target.matches("#merchandiseServicesSold")){
            let value = event.target.value;
            let valueLength = event.target.value.length;            
            let maxChars = 255;
            let RemainingChars = maxChars - valueLength;
            if(valueLength > maxChars){
                event.target.value  = value.substr(0,maxChars);
                return;
            }
            document.getElementById('remainingText2').innerHTML = `${RemainingChars} Remaining Characters`

         
        }

            
    })

    document.addEventListener("input", function(event){
        if(event.target.matches(".forOnlyNumbers")){
            let value = event.target.value;
            if(typeof value === 'string'){
            event.target.value = value.replace(/[^0-9]/g, '').replace(/(\..*)\./g,'$1')
            return;
            // console.log("this is a string");
            }
         }        
           
    }) 
 
    let showTextOnClick = function (e) {

        if(e.target.matches("#firstNamePrin")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 40;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }            
            document.getElementById("p_2").innerHTML = `${remainingChars2} characters left`
        }

        
        if(e.target.matches("#lastNamePrin")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 40;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_3").innerHTML = `${remainingChars2} characters left`
        }
  
        if(e.target.matches("#driverLicenseNumber")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 40;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_4").innerHTML = `${remainingChars2} characters left`
        }

        if(e.target.matches("#streetPrin")){
            let value = e.target.value;
            let valueLength3 = e.target.value.length;
            let maxLimit2 = 80;
            let remainingChars3 = maxLimit2-valueLength3;
            if(valueLength3 > maxLimit2){
                e.target.value = value.substr(0,maxLimit2);
                return;
            }
            document.getElementById("p_6").innerHTML = `${remainingChars3} characters left`
        }

        if(e.target.matches("#street2Prin")){
            let value = e.target.value;
            let valueLength3 = e.target.value.length;
            let maxLimit2 = 80;
            let remainingChars3 = maxLimit2-valueLength3;
            if(valueLength3 > maxLimit2){
                e.target.value = value.substr(0,maxLimit2);
                return;
            }
            document.getElementById("p_7").innerHTML = `${remainingChars3} characters left`
        }

        if(e.target.matches("#cityPrin")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 40;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_8").innerHTML = `${remainingChars2} characters left`
        }

        if(e.target.matches("#dbaName")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 5;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_9").innerHTML = `${remainingChars2} characters left`
        }
        
        if(e.target.matches("#corporateName")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 30;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_10").innerHTML = `${remainingChars2} characters left`
        }    
           
        if(e.target.matches("#federalTaxIdNumber")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 9;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_11").innerHTML = `${remainingChars2} characters left`
        }  
        
        if(e.target.matches("#mcc")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 4;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_12").innerHTML = `${remainingChars2} characters left`
        }  
        
        if(e.target.matches("#phoneBusiness")){
            let value = e.target.value;
            let valueLength2 = e.target.value.length;
            maxLimit = 10;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_13").innerHTML = `${remainingChars2} characters left`
        }  
        
        if(e.target.matches("#ebtAccountNumber")){
            let value = e.target.value;
        
            let valueLength2 = e.target.value.length;
            maxLimit = 20;
            remainingChars2 = maxLimit-valueLength2;
            if(valueLength2 > maxLimit){
                e.target.value = value.substr(0,maxLimit);
                return;
            }
            document.getElementById("p_14").innerHTML = `${remainingChars2} characters left`
           
        } 

// for bussiness contact section

if(e.target.matches("#firstNameBc")){
    let value = e.target.value;
    let valueLength2 = e.target.value.length;
    maxLimit = 40;
    remainingChars2 = maxLimit-valueLength2;
    if(valueLength2 > maxLimit){
        e.target.value = value.substr(0,maxLimit);
        return;
    }            
    document.getElementById("span_1").innerHTML = `${remainingChars2} characters left`
}


if(e.target.matches("#lastNameBc")){
    let value = e.target.value;
    let valueLength2 = e.target.value.length;
    maxLimit = 40;
    remainingChars2 = maxLimit-valueLength2;
    if(valueLength2 > maxLimit){
        e.target.value = value.substr(0,maxLimit);
        return;
    }
    document.getElementById("span_2").innerHTML = `${remainingChars2} characters left`
}

if(e.target.matches("#socialSecurityNumberBc")){
    let value = e.target.value;
    let valueLength2 = e.target.value.length;
    maxLimit = 9;
    remainingChars2 = maxLimit-valueLength2;
    if(valueLength2 > maxLimit){
        e.target.value = value.substr(0,maxLimit);
        return;
    }
    document.getElementById("span_3").innerHTML = `${remainingChars2} characters left`
}


if(e.target.matches("#phoneNumberBc")){
    let value = e.target.value;
    let valueLength2 = e.target.value.length;
    maxLimit = 10;
    remainingChars2 = maxLimit-valueLength2;
    if(valueLength2 > maxLimit){
        e.target.value = value.substr(0,maxLimit);
        return;
    }
    document.getElementById("span_4").innerHTML = `${remainingChars2} characters left`
}  


if(e.target.matches("#streetBc")){
    let value = e.target.value;
    let valueLength3 = e.target.value.length;
    let maxLimit2 = 80;
    let remainingChars3 = maxLimit2-valueLength3;
    if(valueLength3 > maxLimit2){
        e.target.value = value.substr(0,maxLimit2);
        return;
    }
    document.getElementById("span_6").innerHTML = `${remainingChars3} characters left`
}

if(e.target.matches("#street2Bc")){
    let value = e.target.value;
    let valueLength3 = e.target.value.length;
    let maxLimit2 = 80;
    let remainingChars3 = maxLimit2-valueLength3;
    if(valueLength3 > maxLimit2){
        e.target.value = value.substr(0,maxLimit2);
        return;
    }
    document.getElementById("span_7").innerHTML = `${remainingChars3} characters left`
}

if(e.target.matches("#cityBc")){
    let value = e.target.value;
    let valueLength2 = e.target.value.length;
    maxLimit = 40;
    remainingChars2 = maxLimit-valueLength2;
    if(valueLength2 > maxLimit){
        e.target.value = value.substr(0,maxLimit);
        return;
    }
    document.getElementById("span_8").innerHTML = `${remainingChars2} characters left`
}

// for bussiness address - DBA section

        if(e.target.matches("#streetDba")){
            let value = e.target.value;
            let valueLength3 = e.target.value.length;
            let maxLimit2 = 80;
            let remainingChars3 = maxLimit2-valueLength3;
            if(valueLength3 > maxLimit2){
                e.target.value = value.substr(0,maxLimit2);
                return;
            }
            document.getElementById("span_9").innerHTML = `${remainingChars3} characters left`
        }

        if(e.target.matches("#street2Dba")){
            let value = e.target.value;
            let valueLength3 = e.target.value.length;
            let maxLimit2 = 80;
            let remainingChars3 = maxLimit2-valueLength3;
            if(valueLength3 > maxLimit2){
                e.target.value = value.substr(0,maxLimit2);
                return;
            }
        document.getElementById("span_10").innerHTML = `${remainingChars3} characters left`
    }
    
    if(e.target.matches("#cityDba")){
        let value = e.target.value;
        let valueLength2 = e.target.value.length;
        maxLimit = 40;
        remainingChars2 = maxLimit-valueLength2;
        if(valueLength2 > maxLimit){
            e.target.value = value.substr(0,maxLimit);
            return;
        }
        document.getElementById("span_11").innerHTML = `${remainingChars2} characters left`
    }

    // for bussiness address - Corporate section

    if(e.target.matches("#streetCorporate")){
        let value = e.target.value;
        let valueLength3 = e.target.value.length;
        let maxLimit2 = 80;
        let remainingChars3 = maxLimit2-valueLength3;
        if(valueLength3 > maxLimit2){
            e.target.value = value.substr(0,maxLimit2);
            return;
        }
        document.getElementById("span_12").innerHTML = `${remainingChars3} characters left`
    }

    if(e.target.matches("#street2Corporate")){
        let value = e.target.value;
        let valueLength3 = e.target.value.length;
        let maxLimit2 = 80;
        let remainingChars3 = maxLimit2-valueLength3;
        if(valueLength3 > maxLimit2){
            e.target.value = value.substr(0,maxLimit2);
            return;
        }
    document.getElementById("span_13").innerHTML = `${remainingChars3} characters left`
}

if(e.target.matches("#cityCorporate")){
    let value = e.target.value;
    let valueLength2 = e.target.value.length;
    maxLimit = 40;
    remainingChars2 = maxLimit-valueLength2;
    if(valueLength2 > maxLimit){
        e.target.value = value.substr(0,maxLimit);
        return;
    }
    document.getElementById("span_14").innerHTML = `${remainingChars2} characters left`
}


// for bussiness address - ShipTo section

if(e.target.matches("#streetShipTo")){
    let value = e.target.value;
    let valueLength3 = e.target.value.length;
    let maxLimit2 = 80;
    let remainingChars3 = maxLimit2-valueLength3;
    if(valueLength3 > maxLimit2){
        e.target.value = value.substr(0,maxLimit2);
        return;
    }
    document.getElementById("span_15").innerHTML = `${remainingChars3} characters left`
}

if(e.target.matches("#street2ShipTo")){
    let value = e.target.value;
    let valueLength3 = e.target.value.length;
    let maxLimit2 = 80;
    let remainingChars3 = maxLimit2-valueLength3;
    if(valueLength3 > maxLimit2){
        e.target.value = value.substr(0,maxLimit2);
        return;
    }
document.getElementById("span_16").innerHTML = `${remainingChars3} characters left`
}

if(e.target.matches("#cityShipTo")){
let value = e.target.value;
let valueLength2 = e.target.value.length;
maxLimit = 40;
remainingChars2 = maxLimit-valueLength2;
if(valueLength2 > maxLimit){
    e.target.value = value.substr(0,maxLimit);
    return;
}
document.getElementById("span_17").innerHTML = `${remainingChars2} characters left`
}
   

// for Bank-Account section

    if(e.target.matches("#abaRouting")){
        let value = e.target.value;
        let valueLength3 = e.target.value.length;
        let maxLimit2 = 9;
        let remainingChars3 = maxLimit2-valueLength3;
        if(valueLength3 > maxLimit2){
            e.target.value = value.substr(0,maxLimit2);
            return;
        }
        document.getElementById("span_18").innerHTML = `${remainingChars3} characters left`
    }

    if(e.target.matches("#demandDepositAccount")){
        let value = e.target.value;
        let valueLength3 = e.target.value.length;
        let maxLimit2 = 17;
        let remainingChars3 = maxLimit2-valueLength3;
        if(valueLength3 > maxLimit2){
            e.target.value = value.substr(0,maxLimit2);
            return;
        }
        document.getElementById("span_19").innerHTML = `${remainingChars3} characters left`
    }
    }
    document.addEventListener("input", showTextOnClick);
    document.addEventListener("click", showTextOnClick);    

// this code is for equityOwnershipPercentage
    let equityOwnPer = (event) => {
       
    if(event.target.matches("#equityOwnershipPercentage")){
        value = event.target.value;
        event.target.value = `${value}%`
      if(value > 100 || value < 0 ){
          document.getElementById('equityOwnPerId').innerHTML = "please enter value between 0% to 100%";
          document.getElementById('equityOwnPerId').style.color = "red";
          document.getElementById('equityOwnershipPercentage').style.color = "red";       
      }
      else {
        document.getElementById('equityOwnPerId').innerHTML = "yor entered a right value";
        document.getElementById('equityOwnPerId').style.color = "green";
        document.getElementById('equityOwnershipPercentage').style.color = "black";
      }    
    }

}
    document.addEventListener("change", equityOwnPer);

})();





