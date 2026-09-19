const prompt = require('prompt-sync')();
const n = Number(prompt("enter a number : "))
let x = []
for (let i = 0 ; i < n ; i++ ){
    let a = prompt("entrer a nombre " , i + 1)
    x.push(a)
console.log("resultat : " , x )
}