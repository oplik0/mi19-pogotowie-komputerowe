"use strict";
const price = 8;
const height = 2.7;
function runScript() {
    const sendButton = document.getElementById("send");
    const nameInput = document.querySelector('input[name="name"]');
    const surnameInput = document.querySelector('input[name="surname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const serviceSelect = document.querySelector('select[name="service"]');
    const result = document.getElementById("result");
    sendButton.addEventListener("click", () => {
        const name = nameInput.value.toLowerCase();
        const surname = surnameInput.value.toLowerCase();
        const email = emailInput.value.toLowerCase();
        const service = serviceSelect.value;
        result.innerHTML = `${name} ${surname}<br>${email}<br>Usługa: ${service}`;
    });
}

if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
) {
    runScript();
} else {
    document.addEventListener("DOMContentLoaded", runScript);
}
