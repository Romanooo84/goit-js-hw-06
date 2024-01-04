const list = document.querySelectorAll('h2')
const listUl = document.querySelectorAll('ul')
console.log(`Number of categories: ${list.length}`)
console.log(listUl)
list.forEach(function callback(element) {
    console.log(element)
});

