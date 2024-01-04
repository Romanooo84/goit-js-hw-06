const list = document.querySelectorAll('h2')
const nameList=[]
console.log(`Number of categories: ${list.length}`)
list.forEach(function callback(element) {
    nameList.push(element.textContent)
});
console.log(nameList)
