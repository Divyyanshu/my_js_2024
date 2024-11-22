const companies = ['google', 'meta', 'netflix', 'ibm', 'tcs'];
const color = ['red', 'blue', 'orange', 'black', 'green'];


companies.forEach((el, indx) => {
    console.log(el, indx)
    const div = document.createElement("div")
    div.innerText = el;
    div.style.backgroundColor = color[indx]
    console.log(div)
    document.body.appendChild(div)
})