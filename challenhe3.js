const prompt = require('prompt-sync')();
const n = Number(prompt("enter a number : "))
let x = []
let resultat = 0 
for (let i = 0 ; i < n ; i++ ){
    let a =  Number(prompt("entrer a element " , i + 1))
    x.push(a)
    resultat = resultat + x[i]
}
console.log("resultat : " , x )
console.log( "la some total est  : " , resultat  )