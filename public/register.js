let data = []

let OTP = ''

function createotp() {
    OTP = ''
    let digits = '0123456789';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    alert(OTP);

}

function alldata() {

    let name = document.getElementById("uname").value;
    let email = document.getElementById("umail").value;
    let pass = document.getElementById("upass").value;
    let num = document.getElementById("unum").value;
    let otp = document.getElementById("otp").value;

    let data1 = {
        name: name,
        email: email,
        pass: pass,
        num: num,
        otp: otp,
        id: Date.now(),
    }
    let already = false
    let newdata = JSON.parse(localStorage.getItem('datasave'))
    if (newdata) {
        data = newdata
        for (let i = 0; i < data.length; i++) {
            if (email == data[i].email) {
                already = true
            }
        }
    }


    if (document.getElementById('uname').value == '' && document.getElementById('umail').value == '' && document.getElementById('upass').value == '') {
        alert('please fill in data')
    }

    else {
        var mobileNumber = document.getElementById("unum").value;
        var lblError = document.getElementById("lblError");

        var expr = /^(0|91)?[6-9][0-9]{9}$/;

        if (!expr.test(mobileNumber)) {
            lblError.innerHTML = "";
            alert("Invalid Mobile Number")
        }
        else {
            if (OTP == otp) {
                if (already) {
                    alert('Email already Register')
                }

                else {
                    if (document.getElementById('otp').value == '') {
                        alert('Please Enter OTP')
                    }

                    else {
                        document.getElementById("uname").value = ''
                        document.getElementById("umail").value = ''
                        document.getElementById("upass").value = ''
                        document.getElementById("unum").value = ''
                        document.getElementById("otp").value = ''

                        data.push(data1)
                        localStorage.setItem('datasave', JSON.stringify(data))

                    }
                }
            }

            else {
                alert('Not valid Your OTP')

            }

        }

        console.log(data);
    }

}

function set() {
    window.location.href = "/index.html"
}

