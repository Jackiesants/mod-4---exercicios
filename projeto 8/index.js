const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const port = 8000

app.use(bodyParser.json());


( async () => {

    const database = require("./db")
    const Dicas = require("./dicas")
    await database.sync();

})()

app.post('/create', (req, res) => {
   
    ( async () => {
    const novaDica = await Dicas.create({
        nome: req.body.nome
      })

    })()
    
      res.json(novaDica);
   
});

//dicas
    app.get('/tips', (req, res) => {
        ( async () => {
        const dicas = await Dicas.findByPk(Math.floor(Math.random() * novaDica.lenght));
    })()

        res.json({
            "dica": dicas
        })
    });

    app.listen(port, ()=>{
        console.log(`Servidor na porta http://localhost:${port}`);
    })