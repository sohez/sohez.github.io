var dataJson = [
  {
    "img": "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    "title": "Mcodo: Learn coding, A.I. Chat Bot & Online 25+ compiler.",
    "paragraph": "Android Kotlin, Retrofit, Server-Sent Events (SSE), Room DB, ACE Editor.",
    "url": "https://play.google.com/store/apps/details?id=in.sohezsoft.mcodo"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/5806/5806364.png",
    "title": "Student Portal App",
    "paragraph": "Android Kotlin, Retrofit, Glide, ROOM, Lottie animation.",
    "url": "https://github.com/sohez/StudentPortalApp"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    "title": "Registration Full API",
    "paragraph": "PHP API : LOGIN, SIGNUP, FORGOT-PASS, Data ENC/DEC, PHP POD, MYSQL.",
    "url": "https://github.com/sohez/PHP-Projects/tree/main/REGISTRATION-FULL-API"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/2156/2156009.png",
    "title": "Marks Percentage Calculator & Download Result.",
    "paragraph": "HTML, CSS, Js (lib- jspdf, html2canvas)",
    "url": "https://sohez.github.io/Marks-Percentage-Calculator/"
  }
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content; cursor: pointer;
    "
    >
    <div
      style="padding: 12px; height: 200px;"
      class="project-card progress mb-5 align-items-center">
      <div class="mt-3 ms-3 row">
    
        <h2 style="color: txt-color; font-size: medium"><b>${item.title}</b></h2>
        <p style="color: txt-color; font-size: small">
        ${item.paragraph}
        </p>
        <a
        rel="noopener"
        href="${item.url}"
        target="_blank"
        title="${item.title}">
        <button type="button" class="btn btn-secondary">
          View
        </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;