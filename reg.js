function register(event) {
    event.preventDefault();
    // alert("function called")
    // var name = document.getElementById("name").value
    // console.log(name, "name here")
    // var number=document.getElementById("mobilenumber").value

    var email = document.getElementById("email").value
    // console.log(email);
    var password = document.getElementById("password").value
    // console.log(password)
    var confirmpassword = document.getElementById("confirmpassword").value
    // console.log(confirmpassword);

    if (email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("tanishqusers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        // userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword,
                        // mobilenumber:number
                    }
                    Ls.push(userdata);
                    localStorage.setItem("tanishqusers",JSON.stringify(Ls))
                    alert("Registration Successful")
                    window.location.href=`./login.html`;
                    // document.getElementById("name").value = ""
                    document.getElementById("email").value = ""
                    document.getElementById("password").value = ""
                    document.getElementById("confirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist");
                }
            }
            else {
                console.log("password not match");
            }

        } else {
            console.log("password should  include 8 or more characters");
        }
    } else {
        console.log("please fill all fields");
    }

}