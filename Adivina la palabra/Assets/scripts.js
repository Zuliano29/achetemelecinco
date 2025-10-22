const words = ["pepe", "arena", "tilin", "perro", "flor"];
let palabraelegida = words[Math.floor(Math.random() * words.length)];
let intentos = 0;

const input = document.getElementById("guessInput");
const check = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const reset = document.getElementById("resetBtn");

check.addEventListener("click", () => {
    const valor = input.value.trim();
    intentos++;
    attempts.textContent = `Intentos: ${intentos}`;

    if (valor === palabraelegida) {
        message.textContent = `¡Correcto! la palabra elegida es: ${palabraelegida}`;
        message.style.color = "green";
        check.disabled = true;
        input.disabled = true;
        reset.classList.remove("hidden");
    } else {
        message.textContent = "Intenta otra vez";
        message.style.color = "blue";
    }
    input.value = "";
    input.focus();
});

reset.addEventListener("click", () => {
    intentos = 0;
    attempts.textContent = 'Intentos: 0';
    message.textContent = "";
    input.value = "";
    check.disabled = false;
    input.disabled = false;
    reset.classList.add("hidden");
});
