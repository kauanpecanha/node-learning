// adição de um usuário

const express = require("express");
const server = express();
server.use(express.json())

let customers = [
    {id: 1, name: "Kauan", site: "https://meet.google.com/"},
    {id: 2, name: "Peçanha", site: "https://ead.iprj.uerj.br/moodle/login/index.php"},
    {id: 3, name: "Lira", site: "https://bard.google.com/chat?hl=pt-BR"},
]

server.get("/customers", (req, res)=>{
    
    // retorno de um json com a lista atual de clientes
    return res.json(customers)
})

server.post("/customers", (req, res)=>{
    // capturar o nome e o site
    // determinação do novo id
    // criação do objeto para o novo cliente
    // adição do novo cliente na lista de clientes
    // retorno do objeto do novo cliente usando json

    const { name, site } = req.body;
    const newID = customers[customers.length - 1].id + 1;
    const newCustomer = { id: newID, name: name, site: site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer)

    // return console.log(req.body.name)
})

server.put("/customers/:id", (req, res) => {
    
    // captura do id desejado para atualização através dos parâmetros passados pela url
    const id = parseInt(req.params.id);
    
    // captura das novas informações de nome e site através do json enviado
    const { name, site } = req.body;

    // procura do índice do objeto o qual se deseja alterar
    const index = customers.findIndex(each => each.id === id);

    // definição da variável status para caso se encontre ou não o objeto desejado
    const status = index >= 0 ? 200 : 404;

    // se o objeto for encontrado
    if (status === 200) {
        
        // substituição do usuário do índice em questão por um novo com as novas informações
        customers[index] = { id: parseInt(id), name, site };
    
    // se o objeto não for encontrado
    }else{
        
        // retorno do status 404
        return res.status(status)
    }

    // de qualquer forma, é retornado o status da operação, bem como o novo objeto, devidamente atualizado
    return res.status(status).json(customers[index])
})

server.delete("/customers/:id", (req, res)  =>{
    const id = parseInt(req.params.id);
    const index = customers.findIndex(each => each.id === id);
    const status = index >= 0 ? 200 : 404;

    if(status === 200){
        customers.splice(index, 1)
    }else{

    }

    return res.status(status).json(customers)

})

server.listen(5000);