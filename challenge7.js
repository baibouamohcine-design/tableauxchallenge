const prompt = require("prompt-sync")();
const nombreElemnents = Number(prompt("entrer nombre des élements: "))
let tableaux = []
for(let i = 0 ; i<nombreElemnents;i++) {
    let element = Number(prompt("entrer les élementes " , i+1))
tableaux.push(element)
}
for(let i = 0 ; i<nombreElemnents-1 ;i++){
    for(j=0;j<nombreElemnents-1-i;j++){
        if (tableaux[j]>tableaux[j+1]){
            let x = tableaux[j]
            tableaux[j] = tableaux[j+1]
            tableaux[j+1]=x
        }
    }
}
console.log(tableaux)




