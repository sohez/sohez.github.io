window.onscroll = function () { scroll_fun() };

$(".crd").hide(); //hide card default

$(".bbt").click(function () {
    //button clicked after show/hide card
    $(".crd").slideToggle();
});

settick(".tic:eq(0)");//default tick color

if (localStorage.getItem("color")) {
    console.log(localStorage.getItem("color"))
    let n = JSON.parse(localStorage.getItem("color"))
    $(":root").css("--maincolor", n[0]["color"]);
    settick(n[0]["tic"]);
}

setcolor = (par) => {
    console.log(par)

    switch (par) {
        case "color-1":
            localStorage.setItem("color", `[{"color":"#C70039","tic":".tic:eq(0)"}]`);
            $(":root").css("--maincolor", "#C70039");//red
            settick(".tic:eq(0)");
            break;
        case "color-2":
            localStorage.setItem("color", `[{"color":"#fe4365","tic":".tic:eq(1)"}]`);
            $(":root").css("--maincolor", "#fe4365");//pink
            settick(".tic:eq(1)");
            break;
        case "color-3":
            localStorage.setItem("color", `[{"color":"#e39801","tic":".tic:eq(2)"}]`);
            $(":root").css("--maincolor", "#e39801");//yellow
            settick(".tic:eq(2)");
            break;
        case "color-4":
            localStorage.setItem("color", `[{"color":"#37af49","tic":".tic:eq(3)"}]`);
            $(":root").css("--maincolor", "#37af49");//gren
            settick(".tic:eq(3)");
            break;

    }
}

function toggle_mode(){
    if(localStorage.getItem("mode") == "white"){
         //dark
         localStorage.setItem("mode", `dark`);
         $(":root").css("--bg", "#121212");
         $(":root").css("--bg-sec", "#222222");
         $(":root").css("--txt-color", "#efeaea");

    }else{
         //white
         localStorage.setItem("mode", `white`);
         $(":root").css("--bg", "#fff");
         $(":root").css("--bg-sec", "#ececec");
         $(":root").css("--txt-color", "rgb(0, 0, 0)");
    }

    // if(localStorage.getItem("mode")){

      

    // }else{
    //     // set white theme
    //     localStorage.setItem("mode", `dark`);
    //     $(":root").css("--bg", "#fff");
    //     $(":root").css("--bg-sec", "#ececec");
    //     $(":root").css("--txt-color", "rgb(0, 0, 0)");
    // }
}

function scroll_fun() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("top-bar").style.width = scrolled + "%";
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



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Designer", "Video Editor", "Blogger", "Content Writer", "Android Developer", "YouTuber"];
const typingDelay = 80;
const erasingDelay = 80;
const newTextDelay = 100; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
