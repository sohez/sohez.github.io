const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  setTimeout(codebysohel, 3000);
  e.preventDefault();
  statusTxt.style.color = "red";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

function codebysohel() {
    e.preventDefault();
  statusTxt.style.color = "red";
  statusTxt.style.display = "none";
  statusTxt.innerText = "Done..";
  form.classList.remove("disabled");
  form.reset();
}

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://sohezcodez.000webhostapp.com/message.php", true);
  
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
