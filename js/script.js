/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    themeToggle.setAttribute("aria-pressed", "true");
}


if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const darkMode =
            document.documentElement.getAttribute("data-theme") === "dark";

        if (darkMode) {

            document.documentElement.removeAttribute("data-theme");

            localStorage.setItem("theme", "light");

            themeToggle.textContent = "☾";
            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );
            themeToggle.setAttribute("aria-pressed", "false");

        } else {

            document.documentElement.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

            themeToggle.textContent = "☀";
            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );
            themeToggle.setAttribute("aria-pressed", "true");

        }

    });

}


/* =========================
   CONTACT FORM
========================= */

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");


if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!form.checkValidity()) {

            message.textContent =
                "Please fill in all required fields.";

            return;
        }

        message.textContent =
            "Thank you! Your message has been submitted.";

        form.reset();

    });

}