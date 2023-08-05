var form = document.getElementById("formid");

function setresText(res) {
    document.getElementById("checker").innerText = res;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    setresText("Sending msg..");
    var msg = sendMessage();
});
function isValid(email) {
    //check email is formated
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}
function sendMessage() {
    var _this = this;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Message").value;
    if (email == "" || message == "") {
        setresText("Email or Message Empty!");
        return false;
    }
    if (!isValid(email)) {
        setresText("Wrong Email");
        return false;
    }

    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbx-QRPtpfpeeWx-f0WRE4x3qa01uJUlMXSzAzF8GXxO7ZNYmfHP3oJPEN9S94FaDcN_dg/exec',
        type: 'post',
        data: $('#formid').serialize(),
        success: function () {
            //if form submited
            setresText("Msg Sended !");
            setTimeout(function () {
                formreset();
            }, 2000);
        },
        error: function () {
            //if form not submit
            setresText("Somthing Error retry!");
        }
    });
    return true;
}
function formreset() {
    //for empty all values
    setresText("");
    document.getElementById("Email").innerText = "";
    document.getElementById("Message").innerText = "";
}
