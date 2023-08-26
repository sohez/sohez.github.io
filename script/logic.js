window.onscroll = function () { scroll_fun() };

$(".crd").hide(); //hide card default

function toggleCard(){
    $(".crd").slideToggle();
}

settick(".tic:eq(0)");//default tick color

if (localStorage.getItem("color")) {
    let n = JSON.parse(localStorage.getItem("color"))
    $(":root").css("--maincolor", n[0]["color"]);
    settick(n[0]["tic"]);
}

// (localStorage.getItem("mode") == "dark") ? darkmode() : whitemode();

function setcolor(color,ticPosition){
            localStorage.setItem("color", `[{"color":"${color}","tic":".tic:eq(${ticPosition})"}]`);
            $(":root").css("--maincolor", color);
            settick(`.tic:eq(${ticPosition})`);
}


// function darkmode(){
//     localStorage.setItem("mode", `dark`);
//          $(":root").css("--bg", "#121212");
//          $(":root").css("--bg-sec", "#222222");
//          $(":root").css("--txt-color", "#efeaea");
// }

// function whitemode(){
//     localStorage.setItem("mode", `white`);
//     $(":root").css("--bg", "#fff");
//     $(":root").css("--bg-sec", "#ececec");
//     $(":root").css("--txt-color", "rgb(0, 0, 0)");
// }

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


// fetch projects start
// function getProjects() {
//     return fetch("projects.json")
//         .then(response => response.json())
//         .then(data => {
//             return data
//         });
// }
