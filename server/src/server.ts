import express, { response } from "express";

const app = express();

app.use(express.json())

//rota: endereço completo da requisição
//recurso: qual entidade estamos acessando no sistema

//métodos http:
//GET - buscar uma ou mais info do back
//POST - criar uma nova info no back
//PUT - atualizar uma info existente
//DELETE - remover uma info do back

//request Param = parâmetros que vem na própria rota que indentificam um recurso - parâmetros obrigatórios
//query Param = parâmetros que vem na própria rota, geralmente, não obrigatórios - para filtros e paginações
//request body = parâmetros para criação e atualização de info


const users = ["Diego", "Cleiton", "Robson", "Daniel"]

app.get("/users", (request, response) => {
  const search = String(request.query.search)
  
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users

  return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id)

  const user = users[id]
  return response.json(user)
})

app.post('/users', (request, response) => {
  const data = request.body

  console.log(data)

  const user = {
    name: data.name,
    email: data.email
  }

  return response.json(user)
})

app.listen(3333);
