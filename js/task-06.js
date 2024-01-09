// wyszukuję pole tekstowe
const textInput = document.querySelector('#validation-input')
//sprawdzam wartość w data-lenght
const length = textInput.getAttribute('data-length')
// globalna zmienna value
let value

// funkcja sprawdzania wartość w polu tekstowym
textInput.addEventListener("input", (event) => {
    //wartość pola tekstowego
    value = event.currentTarget.value;
})

// funkcja sprawdzania czy fokus jest na polu tekstowym i mnieniająca
// obramowanie pola tekstowego zgodnie z warunkami
textInput.addEventListener('blur', () => {
    if (parseInt(value.length) === parseInt(length)) {
        textInput.classList.add('valid');
    }
    else {
        textInput.classList.add("invalid");
    }
})

