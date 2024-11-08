function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.textContent = "Your message has been sent successfully!";
    formMessage.style.color = "green";

    return false; 
}
