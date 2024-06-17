import express from 'express';

const router = express.Router();

// Lista de tarefas
let tarefas = [
  { id: 1, task: 'Estudar Node.js', completed: false },
  { id: 2, task: 'Desenvolver API', completed: false }
];

// Pega uma tarefa pelo ID
router.get('/', (req, res) => {
  const id = Number(req.query.id);
  if (!id) {
    return res.send(tarefas);
  }
  const tarefa = tarefas.find(x => x.id === id);
  if (tarefa) {
    return res.send(tarefa);
  } else {
    return res.status(404).send('Tarefa não encontrada');
  }
});

// Cria nova tarefa
router.post('/', (req, res) => {
  const newTarefa = {
    id: tarefas.length + 1,
    task: req.body.task,
    completed: false
  };
  tarefas.push(newTarefa);
  return res.status(201).send(newTarefa);
});

// Atualiza uma tarefa
router.put('/', (req, res) => {
  const id = Number(req.query.id);
  const tarefa = tarefas.find(x => x.id === id);
  if (tarefa) {
    tarefa.task = req.body.task;
    tarefa.completed = req.body.completed;
    return res.send(tarefa);
  } else {
    return res.status(404).send('Tarefa não encontrada');
  }
});

// Deleta uma tarefa
router.delete('/', (req, res) => {
  const id = Number(req.query.id);
  const initialLength = tarefas.length;
  tarefas = tarefas.filter(x => x.id !== id);
  if (tarefas.length < initialLength) {
    return res.status(204).send();
  } else {
    return res.status(404).send('Tarefa não encontrada');
  }
});

export default router;
