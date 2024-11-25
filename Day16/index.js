const input = document.createElement("input")

input.addEventListener('focus' , function(){
    input.textContent = 'input focused'
    input.style.borderColor = "blue"
})
input.addEventListener('blur' , function(){
    input.textContent = 'input blur'
    input.style.borderColor = "red"
})
input.addEventListener('input', (event)=>{
    console.log(event.target.value)
    input.textContent = 'input focused'
})
