const pool = require("../config/db");

const addTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newtodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [
      description,
    ]);
    res.json(newtodo);
    console.log(newtodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getallTodos = async (req, res) =>{
    try {
        const alltodos = await pool.query ("SELECT * FROM todo");
    res.json (alltodos.rows);
    console.log (alltodos.rows);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

const getTodobyId = async (req, res) =>{
    try {
        const {id} = req.params;
        const todo = await pool.query ("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.status(200).json(todo.rows[0]);
        
    } catch (error) {
        res.status(500).json ({message: error.message})
        
    }
}
const updatetodo = async (req, res) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updatedTodo = await pool.query ("UPDATE todo SET description = $1 WHERE todo_id= $2", [description, id])
        res.status(200).json(updatedTodo);

        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }

}
const deletetodo = async (req, res) =>{
    try {
        const {id} = req.params;
        const deleteitem = await pool.query ("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.status(200).json ("Deleted Succesfully")
        
    } catch (error) {
res.status(500).json ({message: error.message})        
    }
}

module.exports = {addTodo, getallTodos, getTodobyId, updatetodo, deletetodo};
