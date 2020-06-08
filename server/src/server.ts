import express, { response } from "express";
import cors from 'cors'
import routes from './routes'
import path from 'path'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);

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
