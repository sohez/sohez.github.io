// the website developed by sohel sayyed you cant modify/use free

//Teyping Effect
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Pyhon Programmer", "Blogger", "Web Developer", "Android Developer", "YouTuber"],
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

if (localStorage.getItem("color")) {
    console.log(localStorage.getItem("color"))
    let n = JSON.parse(localStorage.getItem("color"))
    $(":root").css("--maincolor", n[0]["color"]);
    console.log("Welcome back !")
    settick(n[0]["tic"]);
}

setcolor = (par) => {
    console.log(par)

    switch (par) {
        case "color-1":
            localStorage.setItem("color", `[{"color":"#ff3936","tic":".tic:eq(0)"}]`);
            $(":root").css("--maincolor", "#ff3936");//red
            settick(".tic:eq(0)");
            break;
        case "color-2":
            localStorage.setItem("color", `[{"color":"rgb(230, 13, 121)","tic":".tic:eq(1)"}]`);
            $(":root").css("--maincolor", "rgb(230, 13, 121)");//pink
            settick(".tic:eq(1)");
            break;
        case "color-3":
            localStorage.setItem("color", `[{"color":"#e39801","tic":".tic:eq(2)"}]`);
            $(":root").css("--maincolor", "#e39801");//yellow
            settick(".tic:eq(2)");
            break;
        case "color-4":
            localStorage.setItem("color", `[{"color":"rgb(15, 178, 124)","tic":".tic:eq(3)"}]`);
            $(":root").css("--maincolor", "rgb(15, 178, 124)");//gren
            settick(".tic:eq(3)");
            break;

    }
}


function settick(check) {
    //tic mark selected color
    $(".tic").hide();//hide all tick
    $(check).show();//tick only selected
}


//Start form logic

function validemail($email) {
    //check email is formated
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

$('#formid').submit(function (e) {
    e.preventDefault();

    $("#checker").text("Sending Msg..");
    //submit button clicked
    var email, message;
    email = $("#Email").val();
    message = $("#Message").val();

    if (!email == "" && !message == "") {
        if (validemail(email)) {
            //if email is valid

            $.ajax({
                url: ' https://script.google.com/macros/s/AKfycbx-QRPtpfpeeWx-f0WRE4x3qa01uJUlMXSzAzF8GXxO7ZNYmfHP3oJPEN9S94FaDcN_dg/exec',
                type: 'post',
                data: $('#formid').serialize(),
                success: function () {
                    //if form submited
                    $("#checker").text("Sended !");
                    setTimeout(function () {
                        formreset();
                    }, 2000);

                },
                error: function () {
                    //if form not submit
                    $("#checker").text("Somthing Error retry!");

                }
            });

        } else {
            //if email is not valid

            $("#checker").text("Wrong Email");
        }
    } else {
        //if email and message box empty

        $("#checker").text("Email or Message Empty!");
    }
});

function formreset() {
    //for empty all values
    $("#checker").text("");
    $("#Email").val("");
    $("#Message").val("");
}
//End form Logic
