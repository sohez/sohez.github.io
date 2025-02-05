//TextTyper by @Sohez.

const typingText = document.querySelector("#typing-text");
const cursorSpan = document.querySelector("#cursor");

const texts = [
  "Web Designer",
  "Video Editor",
  "Blogger",
  "Content Writer",
  "Android Developer",
  "YouTuber",
];

const typingDelay = 200;
const erasingDelay = 200;
const newTextDelay = 1000;
const textHoldingDelay = 1000;

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

const display = (text) => {
  typingText.innerText = text;
};

const start = async () => {

  for (let item of texts) {
    const length = item.length;
    let textStack = "";

    for (let i = 0; i < length; i++) {
      textStack += item[i];
      await wait(typingDelay);
      display(textStack);
    }

    await wait(textHoldingDelay);

    for (let i = length - 1; i >= 0; i--) {
      textStack = textStack.slice(0, -1); // Remove the last character.
      await wait(erasingDelay);
      display(textStack);
    }

    await wait(newTextDelay);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // On DOM Load initiate the effect
  while (true) {
    await start();
  }
});