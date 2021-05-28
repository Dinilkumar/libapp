let user_name = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("pass");
let confirmPassword = document.getElementById("re_pass");
let error = document.querySelector("#error_div");


// function allLetter()
//   {
//    var letters = /^[A-Za-z]+$/;
//    if(user_name.value.match(letters))
//      {
      
//       error_name.innerHTML="";
//       return true;
//      }
//    else
//      {
//         error_name.innerHTML="Enter valid name";
//         error_name.style.color="red";
//         return false;
//      }
//   }
function validate()
{
  
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$///
    // let regexp = /^([A-Za-z0-9\,-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        error.innerHTML="";
        return true;
    }
    {
        alert('hai reach here');
        error.innerHTML="Enter valid Email-Id";
        error.style.color="red";
        return false;
    }
    
}
function phonenumber()
{
    //alert(phone);
  let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(regexp.test(phone.value))
        {
         
         error_phone.innerHTML = "";
         return true;
        }
      else
        {
            error_phone.innerHTML="Enter valid phoneno";
            error_phone.style.color="red";
            return false;
        }
}
function CheckPassword() 
{ 
    //alert("hai");
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var strength = document.getElementById('strength');
    if(password.value.match(decimal)) 
    { 
        return true;
        strength.innerHTML="";
    }
    else
    { 
        
        strength.innerHTML="Enter Password";
        strength.style.color="red";
        return false;
    }
} 
function passwordChanged() 
{
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("pass");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
        
    }
}
function checkPasswordMatch() 
{
    //var password = $("#pass").val();
   
    //var confirmPassword = $("#re_pass").val();
    if (password.value != confirmPassword.value)
    {
       
        $("#CheckPasswordMatch").html("Passwords does not match!");
        return false;
    }
        
    else
    {
        
        $("#CheckPasswordMatch").html("");
        return true;
    }
       
}
