const willYouPassedInExam = new Promise ((resolve,reject)=>{
    resolve();
    reject();
})

console.log(willYouPassedInExam)

function Mydetails(){
    return new Promise((res,rej)=>{
        if(Math.random() > 0.5){
            res("Promise successful");
        }else{
            rej("Promise failed");
        }
    })
}

Mydetails().then((data)=>{
   console.log(data)
}).catch((error)=>{
   console.log(error)
})

console.log(Mydetails())


function fetchCountry(url){
    const countryName = ["india" , "sri lanka" , "usa"];
    return new Promise((res ,rej)=>{
        if(url === 'www.myapi.com'){
            res(countryName)
        }else{
            rej('wrong api')
        }
  
    })
}
fetchCountry('www.myapi.com').then((data)=>{
    data.forEach((country) => {     //FOR ARRAY LOOP ALL VALUES
        const countryData = document.createElement("div");
        countryData.textContent = country;
        document.body.append(countryData)
    });
}).catch((err)=>{
console.log(err)
})