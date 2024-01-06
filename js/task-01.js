
// pobieram wszytkie elementy dla sekcji zwierającej klasę item
const section = document.querySelectorAll('.item')
// wyswietlam długość tej listy
console.log(`Number of categories: ${section.length}`)

// dla kazdego elementy z listy section 
section.forEach(element => {
    // wybieram tylko nagłówek h2 i wysietlam tylko zawarty w nim tekst
    const categories = element.firstElementChild
    console.log(`Category: ${categories.textContent}`)
    //pobieram dzieci ul (ostatnie dziecko dla li---> lastElementChild to ul, dzieci dla ul to li ---> children)
    const ulChild = element.lastElementChild.children
    console.log(`Elements: ${ulChild.length}`) 
});
