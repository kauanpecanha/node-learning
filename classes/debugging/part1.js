// debugando pelo terminal do vscode com console.log

const express = require("express");
const server = express();
server.use(express.json())

let customers = [
    {id: 1, name: "Kauan", site: "https://meet.google.com/"},
    {id: 2, name: "Peçanha", site: "https://ead.iprj.uerj.br/moodle/login/index.php"},
    {id: 3, name: "Lira", site: "https://bard.google.com/chat?hl=pt-BR"},
]


server.get("/customers/:id", (req, res)=>{
    
    const id = parseInt(req.params.id);
    
    const customer = customers.find(each => each.id === id);
    
    const status = customer ? 200 : 404;

    // desta forma, pode-se imprimir o log de mensagem do jeito convencional, mas sem a segurança de formatação adequada
    // console.log("GET :: /customers/:id", customer)

    // desta forma, é assegurado que a mensagem seja devidamente formatada do jeito que espera-se
    console.log("GET :: /customers/:id", json.stringify(customer))
    
    return res.status(status).json(customer);
})

server.listen(5000);