
// pobieram wszytkie elementy dla sekcji zwierającej klasę item
const section = document.querySelectorAll('.item')
// wyswietlam długość tej listy
console.log(`Number of categories: ${section.length}`)

// dla kazdego elementy z listy section 
section.forEach(element => {
    // wybieram tylko nagłówek h2 i wysietlam tylko zawarty w nim tekst
    const categories = element.querySelector('h2')
    console.log(`Category: ${categories.textContent}`)
    // wybieram wszysttkie elementy li zawarte w ul i wysietlam dlugosć listy
    const list = element.querySelectorAll('ul li')
    console.log(`Elements: ${list.length}`)
    
});