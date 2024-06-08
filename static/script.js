document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Justicia", "Verdad", "Humildad"];
    let index = 0;
    const textElement = document.getElementById('text-animation');
    let timeout;

    function changeText() {
        clearTimeout(timeout);
        textElement.textContent = texts[index];
        // Forzar reflujo para reiniciar la animación
        void textElement.offsetWidth;
        textElement.classList.add('animated-text');

        timeout = setTimeout(() => {
            textElement.classList.remove('animated-text');
            index = (index + 1) % texts.length;
            changeText(); // Llamada recursiva para continuar el ciclo de animación
        }, 4000); // Tiempo de espera para que coincida con el tiempo de animación
    }

    // Iniciar la primera animación inmediatamente
    changeText();
});

