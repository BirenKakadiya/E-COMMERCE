let UOTP = ''

function createotp() {
    UOTP = ''
    let digits = '0123456789';
    for (let i = 0; i < 4; i++) {
        UOTP += digits[Math.floor(Math.random() * 10)];
    }
    alert(UOTP);

}

function logindata() {

    let x = []

    if (localStorage.getItem('datasave')) {
        x = JSON.parse(localStorage.getItem("datasave"))
    }

    console.log(x);

    let mail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let num = document.getElementById("num").value;
    let otp = document.getElementById("otp").value;

    let logdata = {
        mail: mail,
        num: num,
    }

    let validEmail = false
    let validPass = false
    let validNum = false

    for (let i = 0; i < x.length; i++) {
        if (document.getElementById("email").value == x[i].email) {
            validEmail = true
            if (document.getElementById("pass").value == x[i].pass) {
                validPass = true
                if (document.getElementById("num").value == x[i].num) {
                    validNum = true
                }
            }
        }
    }

    if (validEmail && validPass && validNum) {
        if (document.getElementById("otp").value == '') {
            alert('Please enter OTP')
        }
        else {
            if (UOTP == otp) {
                window.location.href = "/admin.html"
            }
            else {
                alert("Invalid your OTP")
            }
        }

    }
    else {
        if (validEmail) {
            if (validPass) {
                alert('Not Valid your Number')
            }
            else {
                alert('Not valid your password')
            }
        }
        else {
            alert('Not Valid your Email')
        }
    }


    document.getElementById("email").value = ''
    document.getElementById("pass").value = ''
    document.getElementById("num").value = ''
    document.getElementById("otp").value = ''

    localStorage.setItem("DataNumber", JSON.stringify(logdata))
}