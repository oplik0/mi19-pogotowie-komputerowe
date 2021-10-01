"use strict";
const price = 8;
const height = 2.7;
function runScript() {
    const form = document.getElementById("contact-form");
    const nameInput = document.querySelector('input[name="name"]');
    const surnameInput = document.querySelector('input[name="surname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const serviceSelect = document.querySelector('select[name="service"]');
    const result = document.getElementById("result");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = nameInput.value;
        const surname = surnameInput.value;
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
