const prompt = require('prompt-sync')();
const n = Number(prompt("enter a number : "))
let x = []
let some = 0 

for (let i = 0 ; i < n ; i++ ){
    let a =  Number(prompt("entrer a element " + (i + 1) + " : "))
    x.push(a)
}
 
let min = x[0]
let max = x[0]

for( let j = 0 ; j < x.length ; j++ ){
    some+=x[j]
    if(x [j] < min ){
    min = x[j]
    } 
    if(x[j] > max ){
        max = x[j]
    }
    console.log(max)
}

console.log("resultat : " , x )
console.log("la some est :  ", some )
console.log("la miniumun est :", min )
console.log("la maxumiun est : " , max )
