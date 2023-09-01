window.onscroll = function () { scroll_fun() };

let container = document.getElementById('toggle-card');
const root = document.querySelector(':root');

function toggle_card(){
    if (!container.classList.contains('active')) {
        container.classList.add('active');
        container.style.height = 'auto';

        let height = container.clientHeight + "px";

        container.style.height = '0px';

        container.style.height = height;

    } else {
        container.style.height = '0px';

        container.addEventListener('transitionend', function () {
            container.classList.remove('active');
        }, {
            once: true
        });
    }
}

settick(1); //default tick color

if (localStorage.getItem("color")) {
    let n = JSON.parse(localStorage.getItem("color"))
    root.style.setProperty('--maincolor', n[0]["color"]);
    settick(n[0]["tic"]);
}


function setcolor(color,ticPosition){
            localStorage.setItem("color", `[{"color":"${color}","tic":${ticPosition}}]`);
            root.style.setProperty('--maincolor', color);
            settick(ticPosition);
}

function settick(position) {
    //tic mark selected color
   const t1 = document.getElementsByClassName("tic")
   for(let i =0; i< t1.length; i++){
    t1[i].style.display = "none";
   }
   document.getElementsByClassName("tic")[position].style.display = "block"
}

function scroll_fun() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("top-bar").style.width = scrolled + "%";
}


// fetch projects start
// function getProjects() {
//     return fetch("projects.json")
//         .then(response => response.json())
//         .then(data => {
//             return data
//         });
// }
