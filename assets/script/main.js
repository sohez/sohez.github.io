function setThemeFromLocal() {
  let localTheme = localStorage.getItem("theme");
  if (localTheme != null) {
    let { background, primary, highlight } = JSON.parse(localTheme);
    setTheme(background, primary, highlight);
  }
}
function setTheme(background, primary, highlight) {
  localStorage.setItem(
    "theme",
    JSON.stringify({
      background: background,
      primary: primary,
      highlight: highlight,
    })
  );
  document.documentElement.style.setProperty("--color-background", background);
  document.documentElement.style.setProperty("--color-primary", primary);
  document.documentElement.style.setProperty("--color-highlight", highlight);
}
function initThemeButtonEvent() {
  const spans = document.querySelectorAll("#setting-card span");
  spans.forEach((span, index) => {
    span.addEventListener("click", () => {
      switch (index) {
        case 0: {
          setTheme("#13071f", "#9900ff", "#9900ff5f");
          break;
        }
        case 1: {
          setTheme("#1C1C1E", "#FF6F61", "#FF6F615f");
          break;
        }
        case 2: {
          setTheme("#001F3F", "#00BFFF", "#00BFFF5f");
          break;
        }
        case 3: {
          setTheme("#000000", "#800080", "#8000805f");
          break;
        }
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  setThemeFromLocal();
  initThemeButtonEvent();

  document.getElementById('settings-button').addEventListener('click',()=>{
    let settingCard = document.getElementById('setting-card');
    settingCard.classList.toggle('hide-card');
  });
  
});
