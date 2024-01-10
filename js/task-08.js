const formInput = document.querySelector('.login-form')

formInput.addEventListener("submit", formSubmit);

let dataUser = {};

function formSubmit(event) {
    event.preventDefault();

    const userEmail = formInput.elements.email.value;
    const userPassword = formInput.elements.password.value;
    
    if (userEmail === "" || userPassword === "") {
        alert("Please fill in all the fields!");
    }
    else {
        dataUser['email'] = userEmail;
        dataUser.password = userPassword;
        console.log(dataUser);
    }
    formInput.reset();
}


