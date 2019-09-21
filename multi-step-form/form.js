var step1cont = document.getElementById('StepOneContainer');
var step2cont = document.getElementById('StepTwoContainer');
var step3cont = document.getElementById('StepThreeContainer');
var successmsg = document.getElementById('SuccessContainer');

var btn1next = document.getElementById('StepOneNext');
var btn2prev = document.getElementById('StepTwoPrevious');
var btn2next = document.getElementById('StepTwoNext');
var btn3prev = document.getElementById('StepThreePrevious');
var submitbtn = document.getElementById('StepThreeSubmit');

btn1next.addEventListener('click',function(){
    var regName = /[a-zA-Z]/;
    var regMail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var eMail = document.getElementById('email').value;
    if(regName.test(firstName) && regName.test(lastName) && regMail.test(eMail)){
        step1cont.style.display = 'none';
        step2cont.style.display = 'block';
    }else if(regName.test(firstName) && regName.test(lastName)){
        var emailError = document.getElementById('email_error');
        emailError.style.display = "block";
    }else if(regMail.test(eMail) && regName.test(lastName)){
        var firstNameError = document.getElementById('first_name_error');
        firstNameError.style.display = "block";
    }else if(regName.test(firstName) && regMail.test(eMail)){
        var lastNameError = document.getElementById('last_name_error');
        lastNameError.style.display = "block";
    }else if(regName.test(firstName)){
        var lastNameError = document.getElementById('last_name_error');
        var emailError = document.getElementById('email_error');
        lastNameError.style.display = "block";
        emailError.style.display = "block";
    }
    else if(regName.test(lastName)){
        var firstNameError = document.getElementById('first_name_error');
        var emailError = document.getElementById('email_error');
        firstNameError.style.display = "block";
        emailError.style.display = "block";
    }
    else if(regMail.test(eMail)){
        var firstNameError = document.getElementById('first_name_error');
        var lastNameError = document.getElementById('last_name_error');
        firstNameError.style.display = "block";
        lastNameError.style.display = "block";
    }
    else {
        var firstNameError = document.getElementById('first_name_error');
        var lastNameError = document.getElementById('last_name_error');
        var emailError = document.getElementById('email_error');
        firstNameError.style.display = "block";
        lastNameError.style.display = "block";
        emailError.style.display = "block";
    }
});




btn2prev.addEventListener('click', function(){
    step1cont.style.display = 'block';
    step2cont.style.display = 'none';
});
btn2next.addEventListener('click', function(){
    var regtext = /[a-zA-Z]/;
    var regcontact = /[0-9]{10}/;
    var contact = document.getElementById('contact').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    if(regtext.test(city) && regtext.test(country) && regcontact.test(contact)){
        step2cont.style.display = 'none';
        step3cont.style.display = 'block';
    }
    else if(regtext.test(city) && regtext.test(country)){
        var contactError = document.getElementById('contact_error');
        contactError.style.display = "block";
    }
    else if(regcontact.test(contact) && regtext.test(country)){
        var cityError = document.getElementById('city_error');
        cityError.style.display = "block";
    }
    else if(regtext.test(city) && regcontact.test(contact)){
        var countryError = document.getElementById('country_error');
        countryError.style.display = "block";
    }
    else if(regtext.test(city)){
        var countryError = document.getElementById('country_error');
        var contactError = document.getElementById('contact_error');
        countryError.style.display = "block";
        contactError.style.display = "block";
    }
    else if(regtext.test(country)){
        var cityError = document.getElementById('city_error');
        var contactError = document.getElementById('contact_error');
        cityError.style.display = "block";
        contactError.style.display = "block";
    }
    else if(regcontact.test(contact)){
        var cityError = document.getElementById('city_error');
        var countryError = document.getElementById('country_error');
        cityError.style.display = "block";
        countryError.style.display = "block";
    }
    else {
        var cityError = document.getElementById('city_error');
        var countryError = document.getElementById('country_error');
        var contactError = document.getElementById('contact_error');
        cityError.style.display = "block";
        countryError.style.display = "block";
        contactError.style.display = "block";
    }
});



btn3prev.addEventListener('click', function(){
    step3cont.style.display = 'none';
    step2cont.style.display = 'block';
});
submitbtn.addEventListener('click', function(){
    var selectProgram = document.getElementById('select_program');
    var message = document.getElementById('message');
    if(selectProgram.selectedIndex && message.value){
        step3cont.style.display = 'none';
        successmsg.style.display = 'block';
    }
    else if(selectProgram.selectedIndex){
        var messageError = document.getElementById('message_error');
        messageError.style.display = 'block';
    }
    else if(message.value){
        var selectProgramError = document.getElementById('select_program_error');
        selectProgramError.style.display = 'block';
    }
    else {
        var messageError = document.getElementById('message_error');
        var selectProgramError = document.getElementById('select_program_error');
        messageError.style.display = 'block';
        selectProgramError.style.display = 'block';
    }
});
