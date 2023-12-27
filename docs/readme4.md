# Uso do Nodemon

### Inicialoação do Nodemon

        npx nodemon <nomedoarquivo>.js
        Vantagem: Atualização Automática

### Incorporação do yarn run dev

    Com a adição do atributo no package.json:
    
        "scripts": {
             "dev": "nodemon index.js"
        }

    agora, é possível executar o nodemon apenas com o comando:

        yarn run dev