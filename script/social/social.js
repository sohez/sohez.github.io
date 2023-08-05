var dataJson = [
    {
        "link":"https://www.instagram.com/sohel_code.py/",
        "title":"Instagram",
        "icon":"./res/instagram.svg"
    },
    {
        "link":"https://github.com/sohez/",
        "title":"GitHub",
        "icon":"./res/github.svg"
    },
    {
        "link":"https://t.me/Mr_Linux_user",
        "title":"Telegram",
        "icon":"./res/telegram.svg"
    },
    {
        "link":"https://www.youtube.com/channel/UC7ncileMgYcYirfzEYGsCqQ",
        "title":"YouTube",
        "icon":"./res/youtube.svg"
    },
    {
        "link":"https://api.whatsapp.com/send?phone=917887614788",
        "title":"Whatsapp",
        "icon":"./res/whatsapp.svg"
    }
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<li>
    <a
      rel="noopener"
      href="${item.link}"
      target="_blank"
      title="${item.title}">
      <img title="${item.title}" src="${item.icon}" class="svg-icon"/>
      </a>
  </li>`;
})

document.getElementById('social-links').innerHTML = `<ul>${raw_html}</ul>`;

