// html file tag calling
const selectBar = document.getElementById("select-tag")

function myCity(url) {
    const cityArray = ["ajmer", "bhilwara", "jaipur", "udaipur", "jhodpur"];
    return new Promise((res, rej) => {
        if (url === "myapi.com") {
            res(cityArray);
        } else {
            rej("promise failed")
        }
    })
}

// console.log(myCity())

myCity("myapi.com").then((data) => {
    data.forEach((city) => {
        console.log(city)
        const citydata = document.createElement("option")
        citydata.textContent = city,
            selectBar.appendChild(citydata)
    })
}).catch((err) => {
    console.log("error reject mode is", err)
})