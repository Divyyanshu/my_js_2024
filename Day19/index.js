const selectCountry = document.getElementById("select-country")


fetch('https://restcountries.com/v3.1/all').then((res) =>
    res.json()).then((data) =>
        data.forEach((countryData) => {
            // console.log(countryData)
            const CountryOptionList = document.createElement('option')
            CountryOptionList.textContent = countryData.name.common
            selectCountry.append(CountryOptionList)
        })
    )
// add event on this application

selectCountry.addEventListener('change', function (event) {
    console.log(event.target.value)
    // use tempolete srings to maniplulate countries name API
    fetch(`https://restcountries.com/v3.1/name/${event.target.value}`).then((res) =>
        res.json()).then((data) => alert(data[0].capital[0])
        )
})


// very very important js async and await  
//  async convert normal function to asyncnous function

async function fetchData(){
   const res = await fetch('https://restcountries.com/v3.1/all')
   const data = await res.json();
   console.log(data)
}

fetchData()