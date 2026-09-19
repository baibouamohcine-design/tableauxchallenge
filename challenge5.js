const prompt = require("prompt-sync")();
const nombreElemnents = Number(prompt("enteré le nombre d'éléments : "))
let element = []
const facteurDeMultiplication =Number (prompt("entré le nombre de multiplication: " ))
for (i = 0 ; i<nombreElemnents; i++){
    let enterElement = Number(prompt("entré l'elemnet : ", i+1))
    element.push(enterElement)
    var resultat = element[i]*facteurDeMultiplication

}
console.log(element)
console.log("la resultat est :" ,resultat )