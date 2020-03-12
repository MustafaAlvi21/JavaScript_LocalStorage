var userArray = [];
window.onload = init;
var notexistEmail;

function addUser() {

    var username = document.forms["myForm"]["username"].value;
    if (username == "") {
      alert("Username must be filled out");
      return false;
    }
    var email1 = document.forms["myForm"]["email"].value;
    if (email1 == "") {
    alert("email must be filled out");
    return false;
    }
    var password1 = document.forms["myForm"]["psw"].value;
    if (password1 == "") {
    alert("password must be filled out");
    return false;
    }
    if (password1.length < 6) {
    alert("password is weak try stronger password");
    return false;
    }
    var re_psw = document.forms["myForm"]["re_psw"].value;
    if (re_psw == "" && re_psw.length < 6) {
    alert("Re-password must be filled out");
    return false;
    }
    if(document.getElementById("email").value != ""){
        var x=document.getElementById("email").value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
          alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;  
        }
    }

    var user = {
        userName: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password1: document.getElementById("password1").value,
        password2: document.getElementById("password2").value,
    };
    var data = (JSON.parse(localStorage.getItem("user")));
    if (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email == user.email) {
                notexistEmail = data[i].email;
            }
        }
    }

    if (notexistEmail !== user.email || data == null) {

            if (user.password1 == user.password2) {
            userArray = JSON.parse(localStorage.getItem("user")) || [];
            userArray.push(user);
            localStorage.setItem("user", JSON.stringify(userArray));
            userArray = localStorage.getItem("user");
            userArray = JSON.parse(userArray);
            alert("successfully registered")
        } else {
            alert("password not match");
            return false;
        }
    } else {
        alert("user exist, please sign in")
        return true;
    }
}

// function validateemail() {
//     if(document.getElementById("email").value != ""){
//     var x=document.getElementById("email").value;  
//     var atposition=x.indexOf("@");  
//     var dotposition=x.lastIndexOf(".");  
//     if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//       alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//       return false;  
//     }
// }  
//     }  

// --------------------------------------------------------------------------------------------------------------------

function signin() {
        var enterEmail = document.getElementById("email").value
        var enterPassword = document.getElementById("password").value
        console.log('enterEmail: ', enterEmail)
        console.log('enterPassword: ', enterPassword)
    // nullpattren(enterEmail, enterPassword)
    var user = (JSON.parse(localStorage.getItem("user")));
    console.log("data", user)
    if (user == null) {
        alert("You are not registerd")
    } else {
            console.log("length", user.length);
            for (var i = 0; i < user.length; i++) {

                // console.log(data[i].email, "   ", data[i].password1);
                if (user[i].email == enterEmail && user[i].password1 == enterPassword) {
                    // alert("successfully logged in ");
                    var validEmail = user[i].email;
                    var validPassword = user[i].password1;
                    break;
                }
            }
            if (validEmail == enterEmail && validPassword == enterPassword) {
                alert("successfully logged in ")
            } else {
                alert("Not registered ")
            }
}
}   





function validateForm() {
    var email1 = document.forms["myForm"]["email"].value;
    if (email1 == "") {
      alert("Name must be filled out");
      return false;
    }
     var password1 = document.forms["myForm"]["psw"].value;
    if (password1 == "") {
      alert("password must be filled out");
      return false;
    }
        var enterEmail = document.getElementById("email").value
        var enterPassword = document.getElementById("password").value
        console.log('enterEmail: ', enterEmail)
        console.log('enterPassword: ', enterPassword)

        // nullpattren(enterEmail, enterPassword)
    var user = (JSON.parse(localStorage.getItem("user")));
    console.log("data", user)

    if (user == null) {
        alert("No data in database")
        window.location.replace("signup.html");
        return false;
    } else {
            console.log("length", user.length);
            for (var i = 0; i < user.length; i++) {
                if (user[i].email == enterEmail && user[i].password1 == enterPassword) {
                    var validEmail = user[i].email;
                    var validPassword = user[i].password1;
                    var loginUserName = user[i].userName;
                    break;
                }
                // alert("Email or password incorrect")
            }
            if (validEmail == enterEmail && validPassword == enterPassword) {
                alert("successfully logged in ")
                alert(loginUserName)
                return true;
            } else {
                 if (validEmail !== enterEmail) {
                alert("You are Not registered or Your email or password is incorrect")
                 } else {
                alert("Your email or password is incorrect")
                 }
                 return false 
                }
        }      
        var a= 9;
        alert(a)
}