const express = require("express")

const server = express()

// query params: ?nome=Kauan&idade=19

// route params: http://localhost:5000/hello/

// chamada completa: http://localhost:5000/hello?nome=Kauan&idade=19

server.get("/", (req, res) => {
    
    // const nome = req.query.nome;

    // const idade = req.query.idade;

    const { nome, idade } = req.query;

    return res.json({
        title: "Home",
        message: `Olá, ${nome}, você tem ${idade} anos.`
    })

})

// mensagem geral
server.get("/customers", (req, res) => {
    
    const nome = req.params.nome;
    
    // const idade = req.params.idade;

    return res.json({
        title: "Home",
        message: `Olá!`
    })

})

// mensagem específica
server.get("/customers/:nome", (req, res) => {
    
    const { nome } = req.params.nome;
    
    // const idade = req.params.idade;

    return res.json({
        title: "Home",
        message: `Olá, ${nome}!`
    })

})

server.get("/customers/:nome/:idade", (req, res) => {
    
    const { nome } = req.params.nome;
    
    const { idade } = req.params.idade;
    
    // const idade = req.params.idade;

    return res.json({
        title: "Home",
        message: `Olá, ${nome}, você tem ${idade}!`
    })

})

server.listen(5000)