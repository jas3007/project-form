var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var name=document.getElementById("contact-name").value;

    if(name.length==0)
    {
        nameError.innerHTML="*required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML="*full name required";
        return false;
    }

    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhone()
{
    var phone=document.getElementById("contact-phone").value;

    if(phone.length==0)
    {
        phoneError.innerHTML="*required"
        return false;
    }

    // if(!phone.match(/^[0-9]{10}$/))

    if(isNaN(phone)){
        phoneError.innerHTML="*numeric values only"
        return false;
    }

    if(phone.length!=10)
    {
        phoneError.innerHTML="*incorrect"
        return false;
    }

    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validateEmail()
{
    var email=document.getElementById("contact-email").value;
    var atposition=email.indexOf("@");
    var dotposition=email.lastIndexOf(".");

    if(email.length==0)
    {
        emailError.innerHTML="*required";
        return false;
    }

    if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {
        emailError.innerHTML="*invalid email";
        return false;
    }

    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;

}


function validateMessage()
{
    var message=document.getElementById("contact-message").value;

    if(message.length==0)
    {
        messageError.innerHTML = "*required"
        return false;
    }

    if(message.length>150)
    {
        messageError.innerHTML ="*max capacity reached";
        return false;
    }
     
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      swal({
            title: "Oops!",
            text: "Please fill the form in correct format",
            icon:"error",
            button:"OK"
          });
      return false;

    }
    
    else {
      swal({
        title: "Response recorded",
        text: "Thanks for giving your valuable feedback",
        icon: "success",
        buttons: {
          ok: {
            text: "OK",
            value: true,
          },
        },
      }).then((value) => {
        if (value === true) {
          // Handle form submission here
          document.querySelector("form").submit();
        }
      });
      return false; // Prevent default form submission
    }
  }
  
  
      











