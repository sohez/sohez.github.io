const form = document.getElementById("form");
const responseTextElement = document.getElementById("message-response");

function setResponseText(text) {
    responseTextElement.innerText = text;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    setResponseText("Please Wait, Sending message...");
    sendMessage();
});

function isValidEmail(email) {
    const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailReg.test(email);
}

function sendMessage() {
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("Message").value.trim();

    if (!email || !message) {
        return setResponseText("Please fill both the fields.");
    }
    if (!isValidEmail(email)) {
        return setResponseText("Enter a valid email address.");
    }

    const data = new FormData();
    data.set('Name', '@PORTFOLLIO');
    data.set('Email', email);
    data.set('Request', message);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwkjI7POBip0D3idUWfZwmdN4bV9TPfkfUWLwWZbu_rxDWSM5_F5VI1jVAXCKlRt0ykAg/exec', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            setResponseText("Thank You for sending the message.");
            setTimeout(resetTheForm, 2000);
        } else {
            setResponseText("Something went wrong, try again.");
        }
    };

    xhr.onerror = function () {
        setResponseText("Something went wrong, try again.");
    };

    xhr.send(data);
}

function resetTheForm() {
    responseTextElement.innerText = "";
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
}
