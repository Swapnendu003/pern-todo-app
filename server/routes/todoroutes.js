const express = require ('express');
const router = express.Router();
const todos = require ("../controllers/todos");

router.post ("/add", todos.addTodo);
router.get ("/todo", todos.getallTodos)
router.get ("/todo/:id", todos.getTodobyId );
router.put ("/todo/update/:id", todos.updatetodo);
router.delete ("/todo/delete/:id", todos.deletetodo)
module.exports = router;