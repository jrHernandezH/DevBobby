const texts = ["web developer", "Developer trainer Full Stack"];
let currentTextIndex = 0;
let currentText = "";
let isDeleting = false;

export function typeText() {
    const text = texts[currentTextIndex];

    if (isDeleting) {
        currentText = text.substring(0, currentText.length - 1);
    } else {
        currentText = text.substring(0, currentText.length + 1);
    }

    document.getElementById("typingText").textContent = currentText;

    // Velocidad de escritura y borrado
    let typeSpeed = 100;
    if (isDeleting) {
        typeSpeed /= 2; // Borrado más rápido
    }

    // ¿Ha terminado de escribir o borrar?
    if (!isDeleting && currentText === text) {
        typeSpeed = 2000; // Esperar 2 segundos al completar el texto
        isDeleting = true;
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    setTimeout(typeText, typeSpeed);
}
