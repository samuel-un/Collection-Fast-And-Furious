document.addEventListener("DOMContentLoaded", () => {
    const loadingGif = document.getElementById("loading-gif");
    const logo = document.getElementById("logo");
    const logoContainer = document.getElementById("logo-container");
    const mainContent = document.querySelector("main");
    const scrollToTopButton = document.getElementById("scrollToTop");
    const darkModeToggle = document.getElementById("darkModeToggle");  // Selecciona el botón de modo oscuro
    const darkModeIcon = document.getElementById("darkModeIcon"); // Selecciona el icono del botón

    // Esperamos 1 segundo (duración del GIF) para empezar la transición de desvanecimiento
    setTimeout(() => {
        loadingGif.style.opacity = "0"; // Desvanece el GIF
        logoContainer.style.backgroundColor = "white"; // Cambia el fondo a blanco
        logo.style.opacity = "1"; // Aparece el logo

        // Después de mostrar el logo, ocultamos el contenedor y mostramos el contenido principal
        setTimeout(() => {
            logo.style.opacity = "0"; // Desvanece el logo

            // Esperamos un poco antes de ocultar el contenedor y mostrar el contenido principal
            setTimeout(() => {
                logoContainer.style.display = "none"; // Oculta el contenedor del logo
                mainContent.classList.remove("hidden"); // Muestra el contenido principal

                // Animar las cartas en cascada
                const cards = document.querySelectorAll(".card");
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("show"); // Añade la clase para hacer visible la carta
                    }, index * 200); // Retraso en milisegundos para la animación en cascada
                });

                // Mostrar el botón de volver arriba
                scrollToTopButton.style.display = "flex";

                // Mostrar el botón de modo oscuro después de la animación de las cartas
                setTimeout(() => {
                    darkModeToggle.classList.add("show"); // Muestra el botón de modo oscuro
                }, cards.length * 200); // Se muestra después de la animación de todas las cartas

            }, 500); // Espera medio segundo para desvanecer el logo
        }, 2000); // Tiempo de visualización del logo
    }, 1000); // Duración del GIF en milisegundos

    // Evento que alterna el modo oscuro
    darkModeToggle.addEventListener("click", () => {
        const body = document.body;  // Selecciona el body
        const cards = document.querySelectorAll(".card");  // Selecciona todas las cartas

        body.classList.toggle("dark-mode"); // Cambia el fondo del body
        cards.forEach(card => {
            card.classList.toggle("dark-mode"); // Cambia el fondo de las cartas
        });
        
        // Cambia el icono del botón según el modo
        if (body.classList.contains("dark-mode")) {
            darkModeIcon.src = 'img/sol.png'; // Cambia a sol en modo oscuro
        } else {
            darkModeIcon.src = 'img/luna.png'; // Cambia a luna en modo claro
        }
    });

    // Al hacer clic en el botón, desplazarse suavemente hacia arriba
    scrollToTopButton.addEventListener("click", () => {
        const scrollDuration = 800; // Duración total en milisegundos
        const scrollStep = -window.scrollY / (scrollDuration / 15); // Cálculo del paso

        // Desplazamiento suave hacia arriba
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep); // Desplazamiento suave
            } else {
                clearInterval(scrollInterval); // Limpiar el intervalo al llegar arriba
            }
        }, 15); // Ejecutar cada 15 ms
    });
});
