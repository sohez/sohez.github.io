//Teyping Effect
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Linux User", "Blogger", "Web Developer", "Android Developer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 70,
    loop: true
});

$(".crd").hide(); //hide card default

$(".bbt").click(function () {
    //button clicked after show/hide card
    $(".crd").slideToggle();
}); 

settick(".tic:eq(3)");//default tick color


$("#color-1").click(function () {
    //red btn click
    $(":root").css("--maincolor", "red");
    settick(".tic:eq(0)");
});


$("#color-2").click(function () {
    //pink btn click
    $(":root").css("--maincolor", "rgb(255, 0, 128)");
    settick(".tic:eq(1)");
});

$("#color-3").click(function () {
    //yellow btn click
    $(":root").css("--maincolor", "yellow");
    settick(".tic:eq(2)");
});

$("#color-4").click(function () {
    //green btn click
    $(":root").css("--maincolor", "rgb(0, 251, 167)");
    settick(".tic:eq(3)");
});

function settick(check) {
    //tic mark selected color
    $(".tic").hide();//hide all tick
    $(check).show();//tick only selected
}


function validemail($email) {
    //check email is formated
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}


$("#submit").click(function () {
    //submit button clicked
    var email, message;
    email = $("#email").val();
    message = $("#help").val();

    if (!email == "" && !message == "") {
        if (validemail(email)) {
            //if email is valid

        } else {
            //if email is not valid
            $("#email").val("flase")
        }
    } else {
        //if email and message box empty
        $("#email").val("bhai email to daal");
    }
});