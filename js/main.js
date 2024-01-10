function displayErrorMessage() {
    let email = document.querySelector(".input-box");

    if (email) {
        email.style.border = '2px solid #FF6347';
    } else {
        console.error("Error couldn't find the element...");
    }
}

function isEmailFormat(email) {
    const regexEmailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email.match(regexEmailFormat) !== null;
}

function getEmailInput() {
    event.preventDefault();

    const email = document.getElementById("inputBox");
    const emailStyle = document.querySelector(".input-box");

    if (!email || email.value.trim() === "") {
        displayErrorMessage();
        return;
    }

    if (!isEmailFormat(email.value)) {
        displayErrorMessage();
        return;
    }

    emailStyle.style.border = '2px solid #4BB543';
}