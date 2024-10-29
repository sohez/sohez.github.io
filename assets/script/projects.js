const ProjectsData = [
  {
    name: "Mcodo :Learn Coding with AI",
    logo: "https://play-lh.googleusercontent.com/au3QvRNWZiRamIYLRb0irFPno-xuzSJDzrL1Te0vGx7889ROiOp3Sr7dIByGomFDJpbX=w480-h960-rw",
    description:
      "Powerful code compiler, AI chat assistant, interactive coding quizzes, and chapter-based learning resources.",
    link: "https://play.google.com/store/apps/details?id=com.sohezsoft.mcodo&hl=en_IN",
  },
  {
    name: "Student Portal App",
    logo: "https://cdn-icons-png.flaticon.com/128/14664/14664511.png",
    description:
      "Student Portal App, build using kotlin.",
    link: "https://github.com/sohez/StudentPortalApp",
  },
  {
    name: "M.P.C",
    logo: "https://cdn-icons-png.flaticon.com/128/1011/1011812.png",
    description:
      "powerful and easy-to-use solution for calculating academic performance. Built with HTML, CSS, JavaScript, html2canvas, and jsPDF.",
    link: "https://sohez.github.io/Marks-Percentage-Calculator/",
  },
  {
    name: "PHP Registration full API",
    logo: "https://cdn-icons-png.flaticon.com/128/17335/17335144.png",
    description:
      "Registration full API PHP and MySql.",
    link: "https://github.com/sohez/PHP-Projects",
  },
  {
    name: "Tic-Tac-Toe",
    logo: "https://cdn-icons-png.flaticon.com/128/434/434798.png",
    description:
      "play against a bot using the Minimax algorithm or with a friend. This game is built with HTML, CSS, and JS.",
    link: "https://sohez.github.io/tic-tac-toe/",
  },
  {
    name: "AI Chat",
    logo: "https://cdn-icons-png.flaticon.com/128/6873/6873405.png",
    description:
      "Gemini AI chat bot, this is built with HTML, CSS, and JS.",
    link: "https://github.com/sohez/ai-chat",
  }
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
            <div>
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
            </div>
            <div>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
            </div>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
