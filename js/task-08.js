//wyszukuje formularz wprowadzania maila i password
const formInput = document.querySelector('.login-form')

//odczytywanie wprowadzonych danych
formInput.addEventListener("submit", formSubmit);

//obiekt dla wprowadzonych danych
let dataUser = {};

//funkcja sprawdzająca wprowadzoen dane
function formSubmit(event) {
    // zapobieganie odswiezania strony
    event.preventDefault();

    //wartość pola email
    const userEmail = formInput.elements.email.value;
    //wartość pola password
    const userPassword = formInput.elements.password.value;
    
    // sprawdzanie czy pola są wypełnione
    if (userEmail === "" || userPassword === "") {
        // jeżeli nie to wyswietl alert
        alert("Please fill in all the fields!");
    }
    // w innym przypadku dodaj do obietktu wartość email i password
    else {
        dataUser['email'] = userEmail;
        dataUser.password = userPassword;
        console.log(dataUser);
    }
    //czyszczenie wartości pól.
    formInput.reset();
}


