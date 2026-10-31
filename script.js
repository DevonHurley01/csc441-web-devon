// Class 15: Step 1: this file is running
console.log("script.js is running");

// Lab 15: Step 2: make each piece stand on its own
// Class 15: Step 2: put this year in the footer
const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Class 15: Step 3: a button that changes the page
const themeButton = document.querySelector("#theme-toggle");


if (themeButton) {

    // Lab 15: Step 4: use the save choice on arrival
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "Light Mode";
    }

    // Lab 15: Step 3: the button says what it will do
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode")

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}

// Lab 15: Step 5: a button to scroll to the top
const topButton = document.querySelector("#top-button");
if (topButton) {
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// Class 16: Step 4: handle the submit
const contactForm = document.querySelector("#contact-form");

// Class 16: Step 4: handle the submit
if (contactForm) {
const formStatus = document.querySelector("#form-status");

// Lab 16: Step 4: Live character count
    const message = document.querySelector("#message");
    const charCount = document.querySelector("#char-count");

    if (message && charCount) {
        message.addEventListener("input", function () {
            charCount.textContent = message.value.length + " characters";
        });
    }



    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");


    nameInput.value = localStorage.getItem("draftname") || "";
    emailInput.value = localStorage.getItem("draftemail") || "";
    messageInput.value = localStorage.getItem("draftmessage") || "";
    charCount.textContent = messageInput.value.length + " characters";


    contactForm.addEventListener("input", function() {
        localStorage.setItem("draftname", nameInput.value);
        localStorage.setItem("draftemail", emailInput.value);
        localStorage.setItem("draftmessage", messageInput.value);
    });




contactForm.addEventListener("submit", function (event) {

    // Lab 16: Step 2: clear the error once they start fixing it
    contactForm.addEventListener("input", function(){
        if(formStatus.classList.contains("error")){
            formStatus.textContent = "";
            formStatus.classList.remove("error");
        }
    });

    event.preventDefault();

    // Lab 16: Step 1: my own check before accepting it
    const name = document.querySelector("#name").value.trim();
    const message = document.querySelector("#message").value.trim();
    const email = document.querySelector("#email").value.trim();

    if(name.length === 0){
        formStatus.textContent = "Please enter your name";
        formStatus.classList.add("error");
        return;
    }

    if(email.length === 0){
        formStatus.textContent = "Please enter your email";
        formStatus.classList.add("error");
        return;
    }

    if(message.length < 10){
        formStatus.textContent = "Please write a bit more, at least 10 characters.";
        formStatus.classList.add("error");
        return;
    }

    formStatus.classList.remove("error");
    formStatus.textContent = "Thanks, " + name + ". Your message is ready to be sent!";
    contactForm.reset();
    localStorage.removeItem("draftname");
    localStorage.removeItem("draftemail");
    localStorage.removeItem("draftmessage");
    charCount.textContent = "0 characters";
});
}

const myclickableemail = document.querySelector("#myclickableemail");
if (myclickableemail) {
    myclickableemail.addEventListener("click", function() {
        const myform = document.querySelector("#myform");
        if (myform) {
            if (myform.style.display === "none") {
            myform.style.display = "block";
        }else {
            myform.style.display = "none";
        }

        } 
    });
}