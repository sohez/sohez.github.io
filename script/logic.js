window.onscroll = function () { scroll_fun() };

$(".crd").hide(); //hide card default

function toggleCard(){
    $(".crd").slideToggle();
}

settick(".tic:eq(0)");//default tick color
setPartical();

if (localStorage.getItem("color")) {
    let n = JSON.parse(localStorage.getItem("color"))
    $(":root").css("--maincolor", n[0]["color"]);
    setPartical(n[0]["color"])
    settick(n[0]["tic"]);
}

// (localStorage.getItem("mode") == "dark") ? darkmode() : whitemode();

function setcolor(color,ticPosition){
            localStorage.setItem("color", `[{"color":"${color}","tic":".tic:eq(${ticPosition})"}]`);
            $(":root").css("--maincolor", color);
            setPartical(color)
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

//sample
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Sohez Official - SAYYED SOHEL";
        }else{
            document.title = "Come Back To Portfolio";
        }
});


// fetch projects start
// function getProjects() {
//     return fetch("projects.json")
//         .then(response => response.json())
//         .then(data => {
//             return data
//         });
// }

function setPartical(color="#C70039"){

    particlesJS('particles-js',
  
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": color
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 200,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 100
          },
          "push": {
            "particles_nb": 2
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#000000",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  
  );
}
