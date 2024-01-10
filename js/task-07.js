//wyszykuje pole tekstowe
const textInput = document.querySelector('input')
//wyszukuje span z id text
const text = document.querySelector('#text')

//funkcja sprawdzania pola input, odczytywania wartości z suwaka i zmiany czcionki w span
textInput.addEventListener("input", (event) => {
    //wartość pola tekstowego (suwaka)
    const value = event.currentTarget.value;
    //zmiana czcionki w span
    text.style.fontSize = value+'px'
})