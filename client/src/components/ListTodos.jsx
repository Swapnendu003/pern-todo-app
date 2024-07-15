import React, { Fragment, useState, useEffect } from 'react';
import EditTodo from './EditTodo';


const ListTodos = () => {
    const [todos, setTodos] = useState ([])
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:3000/todos/todo");
            const jsonData = await response.json();
            //console.log(jsonData);

            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);

        }
    }
    const deleteTodo = async (id) =>{
        try {
            const deletetodo = await fetch (`http://localhost:3000/todos/todo/delete/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo=> todo.todo_id !== id ));
            
        } catch (error) {
            console.error(error.message)
            
        }
    }
useEffect(()=>{
    getTodos();
}, [])
console.log(todos);
    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td> <EditTodo todo={todo}/> </td>
                                <td><button className='btn btn-danger' onClick={()=> deleteTodo(todo.todo_id)}>Delete</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </Fragment>
    );
}

export default ListTodos;
