import express from 'express';
import morgan from 'morgan'; 
import clientController from './src/client/cliente.controller.mjs'

const port = 3000;
const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use('/tarefa', clientController);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
