const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")        //__dirname retorna o diretório: C:\Users\josem\OneDrive\Área de Trabalho\Studies\Curso Softex\JavaScript\teste
    //res.send("Welcome to my World, my friend!");
})

app.get("/hello/:job/:name", function(req, res){        //inserção de parâmetros :job
    res.send("<h1>Hello," + req.params.name + "</h1>" + "<h2>Your profession is: " + req.params.job + "</h2>");     //requisição dos parâmetros
    // só pode ser usando um único send dentro de uma função
})


app.listen(3030, function(){
    console.log("Servidor rodando na URL http://localhost:3030");
});       