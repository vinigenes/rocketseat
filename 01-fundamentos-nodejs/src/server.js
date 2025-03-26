import http, { createServer } from "node:http";

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação especifica de um recurso no back-end
// DELETE => Excluir um recurso do back-end

//Stateful: depende de armazenamento em memória
//Stateless: salva seus dados em aplicações externas

//JSON: permite o processamento dos dados

// Cabeçalhos (requisição/resposta) => Metadados

// Status codes: Imformativos para o back-end

const users = []

const server= http.createServer((req, res) => {
    const {method, url} = req

    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end('Lista de usuários: ' + JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users' ){
        users.push({
            id: 1,
            nome: 'João',
            email: "joão@gmail.com",
         })
        return res.writeHead(201).end()
    }
    
    return res.writeHead(404).end();

})

server.listen(3333)