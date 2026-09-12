const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!form.checkValidity()) {

        message.textContent = "Please fill in all required fields.";

        return;
    }

    message.textContent = "Thank you! Your message has been submitted.";

    form.reset();

});