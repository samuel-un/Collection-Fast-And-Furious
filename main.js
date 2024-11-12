// JavaScript principal

document.addEventListener("DOMContentLoaded", () => {
    const loadingGif = document.getElementById("loading-gif");
    const logo = document.getElementById("logo");
    const logoContainer = document.getElementById("logo-container");
    const mainContent = document.querySelector("main");
    const scrollToTopButton = document.getElementById("scrollToTop");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeIcon = document.getElementById("darkModeIcon");

    // Animación de carga inicial
    setTimeout(() => {
        loadingGif.style.opacity = "0";
        logoContainer.style.backgroundColor = "white";
        logo.style.opacity = "1";

        setTimeout(() => {
            logo.style.opacity = "0";
            setTimeout(() => {
                logoContainer.style.display = "none";
                mainContent.classList.remove("hidden");
                document.querySelectorAll(".card").forEach((card, index) => {
                    setTimeout(() => card.classList.add("show"), index * 200);
                });
                scrollToTopButton.style.display = "flex";
                setTimeout(() => darkModeToggle.classList.add("show"), 200 * document.querySelectorAll(".card").length);
            }, 500);
        }, 2000);
    }, 1000);

    // Modo oscuro
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.querySelectorAll(".card").forEach(card => card.classList.toggle("dark-mode"));
        darkModeIcon.src = document.body.classList.contains("dark-mode") ? 'img/sol.png' : 'img/luna.png';
    });

    // Desplazamiento suave al hacer clic en el botón de volver arriba
    scrollToTopButton.addEventListener("click", () => {
        const scrollDuration = 800;
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });
});
