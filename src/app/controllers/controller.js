let customers = [
    {
        id: 1, name: "Kauan", site: "http://localhost:5000"
    },
    {
        id: 2, name: "Peçanha", site: "http://localhost:4000"
    },
    {
        id: 3, name: "Lira", site: "http://localhost:3000"
    },
]


class CustomersController {
    // Listagem de Registros
    index(req, res) {
        return res.json(customers)
    }

    // Recuperação de Registros
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(each => each.id === id);
        const status = customer ? 200 : 404;

        return res.status(status).json(customer)
    }

    // Criação de Registros
    create(req, res) {
        const { name, site } = req.body

        const newID = customers[customers.length - 1].id + 1;

        const newCustomer = {id: newID, name: name, site: site};

        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }

    // Atualização de Registro
    update(req, res) {
        
        const id = parseInt(req.params.id);

        const { name, site } = req.body;

        const index = customers.findIndex(each => each.id === id);

        const status = index >= 0 ? 200 : 404

        if(status === 200){
            customers[index] = { id: id, name: name, site: site };
        }
        else{
            return res.status(status)
        }

        return res.status(status).json(customers[index])
    }

    // Exclusão de Registro
    destroy(req, res) {
        
        const id = parseInt(req.params.id);

        const index = customers.findIndex(each => each.id === id);

        const status = index >= 0 ? 200 : 404;

        if(status === 200)
        {
            customers.splice(index, 1);
        }

        return res.status(status).json(customers);
    }
}

module.exports = new CustomersController();