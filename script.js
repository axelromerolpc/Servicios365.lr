// ====== TOGGLE MENÚ MOBILE ======
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    btnMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});

// ====== SIMULADOR DE PRÉSTAMO ======
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("simulador-form");
    const resultadoDiv = document.getElementById("resultado-simulacion");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const articulo = document.getElementById("articulo").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const plazo = parseInt(document.getElementById("plazo").value);

        if (isNaN(valor) || valor <= 0) {
            resultadoDiv.innerHTML = "<p class='text-red-500'>Por favor, ingresa un valor válido.</p>";
            return;
        }

        // Lógica de préstamo: 60% del valor ingresado
        const porcentaje = 0.6;
        const montoPrestamo = valor * porcentaje;

        // Cálculo de intereses simples (ejemplo: 5% mensual)
        const interesMensual = 0.05;
        const totalIntereses = montoPrestamo * interesMensual * plazo;
        const totalDevolver = montoPrestamo + totalIntereses;

        resultadoDiv.innerHTML = `
            <div class="bg-green-100 p-4 rounded-lg">
                <p><strong>Artículo:</strong> ${articulo}</p>
                <p><strong>Monto del préstamo:</strong> $${montoPrestamo.toFixed(2)}</p>
                <p><strong>Plazo:</strong> ${plazo} mes(es)</p>
                <p><strong>Intereses estimados:</strong> $${totalIntereses.toFixed(2)}</p>
                <p class="font-bold text-green-700"><strong>Total a devolver:</strong> $${totalDevolver.toFixed(2)}</p>
            </div>
        `;
    });
});

// ====== PREGUNTAS FRECUENTES (FAQ) ======
function toggleFAQ(id) {
    const content = document.getElementById(`faq-${id}`);
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
    } else {
        content.classList.add("hidden");
    }
}