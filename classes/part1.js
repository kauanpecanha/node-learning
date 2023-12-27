// importação do express
import express from "express"

// criação do servidor
const server = express()

// definição da response caso o usuário faça uma requisição para a rota principal
server.get("/", (req, res)=>{
    
    // retorno de um json como response
    return res.json({

        // retorno do conteúdo. O usuário, do lado cliente, poderia acessar a isso da seguinte forma: <h1>json["title"]</h1> / <h2>json["message"]</h2>
        title: "Hello world!",
        message: "Olá meu amigo. Estamos aprendendoo backend."
    })
})

server.get("/hello", (req, res)=>{
    
    // retorno de um json como response
    return res.json({

        // retorno do conteúdo. O usuário, do lado cliente, poderia acessar a isso da seguinte forma: <h1>json["title"]</h1> / <h2>json["message"]</h2>
        title: "Página Hello",
        message: "Você estána página Hello."
    })
})

// abertura de porta reservada para o servidor
server.listen(5000)