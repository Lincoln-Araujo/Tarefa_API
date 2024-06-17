import express from "express"
import clientController from "./src/client/cliente.controller.mjs"

const port = 3000;

const app = express()

app.use(express.json());

app.use('/client', clientController)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
