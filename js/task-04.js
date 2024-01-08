let counterValue = 0

//wyszukuję span z wartością do wyświetlenia
const value = document.querySelector('[id="value"]');
//wyszukuję przycisk odejmowania
const decrementBtn = document.querySelector('[data-action="decrement"]');
// pobieram wartość przycisku, przetwarzam bez znaków i przekształacam na liczbę całkowitą
const dec = parseInt(decrementBtn.textContent.replace("-", ''))
//funkcja po wisnieciu przycisku
const decrementClick = () => {
    counterValue -= dec; // odejmuję wartość dec
    value.textContent = counterValue; // zmieniam value
};
// detekcja zdarzenia wcisnięcia przycisku decrement
decrementBtn.addEventListener("click", decrementClick);

//wyszukuję przycisk dodawania
const incrementBtn = document.querySelector('[data-action="increment"]');
// pobieram wartość przycisku, przetwarzam bez znaków i przekształacam na liczbę całkowitą
const inc = parseInt(incrementBtn.textContent.replace("+", ''));
//funkcja po wisnieciu przycisku
const incrementClick = () => {
    counterValue = counterValue + inc; // dodaję wartość dec
    value.textContent = counterValue; // zmieniam value
};
// detekcja zdarzenia wcisnięcia przycisku increment
incrementBtn.addEventListener("click", incrementClick);
