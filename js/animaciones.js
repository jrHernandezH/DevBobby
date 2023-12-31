import { typeText } from './animations/text.js';


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('typingText')) {
        typeText();
    }

    const checkbox = document.getElementById("burger");
    const nav = document.getElementById("nav");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
    });
});

