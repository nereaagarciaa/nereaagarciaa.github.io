// JavaScript principal del portfolio

const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("is-open");

        navToggle.setAttribute("aria-expanded", isOpen);
        navToggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
    });

    navList.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navList.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Abrir menu");
        }
    });
}

const profileImage = document.querySelector(".hero-image img");

if (profileImage) {
    profileImage.addEventListener("error", () => {
        profileImage.closest(".hero-image").remove();
    });
}
