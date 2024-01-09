// wyszukuję input tekst
const textInput = document.querySelector('[id="name-input"]')
// wyszukuję output tekst
const textOutput= document.querySelector('[id="name-output"]')

//funkcja sprawdzająca zawartość pola tekstowego i zwracająca wynik
textInput.addEventListener("input", (event) => {
    //wartość pola tekstowego
    const value = event.currentTarget.value
    
    //warunek sprawdzenia i wyswietlenia wyniku
    if (value.length === 0) {
        textOutput.textContent = "Anonymous";
    }
    
    else {
        textOutput.textContent = value
    }

});