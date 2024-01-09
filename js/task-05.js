const textInput = document.querySelector('[id="name-input"]')
const textOutput= document.querySelector('[id="name-output"]')

textInput.addEventListener("input", (event) => {
    const value = event.currentTarget.value
    
    if (value.length === 0) {
        textOutput.textContent = "Anonymous";
        console.log('same 0');
        console.log(value.length);
    }
    
    else {
        textOutput.textContent = value
        console.log(value)
    }

});