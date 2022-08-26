import express from "express";
import readLineSync from 'readline-sync';

const port = 8000
const app = express()

app.use(express.json())

let array = [];

while(true) {
const perg = readLineSync.question('Digite a propriedade de css ou sair para finalizar ');
    if(perg.toUpperCase() === "SAIR") {
        break;
    }else{
        array.push(perg);
    }
}
console.log(array.sort());

app.listen(port, ()=>{
    console.log(`Servidor na porta http://localhost:${port}`);
})

console.log("oi")