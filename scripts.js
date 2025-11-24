window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const messageBox = document.querySelector(".message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent page reload

        const email = emailInput.value.trim();

        if (email === "") {
            messageBox.textContent = "Please enter a valid email address.";
            messageBox.style.color = "red";
            return;
        }

        // success message
        messageBox.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        messageBox.style.color = "white";

        // clear input
        emailInput.value = "";
    });
});
