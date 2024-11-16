let str = 'my nameod is am abc';

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.includes("is"))
console.log(str.charAt(1))
console.log(str.indexOf("is", 9))   //answer -1
console.log(str.slice(4, 9))   //cut slice part 9-4 = 5 elements given 
console.log(str.substring(1, 8))  //8-1 = 7 element give 
console.log(str.replace("is" ,"are"))
console.log(str.replaceAll("m" , "k"))


// important methods

const maparray = ["ram" , "shyam" , "mayank" , "divyanshu"];

const mapOutput = maparray.map((item)=>{
return item = item + " tailor"
})

console.log(mapOutput)

