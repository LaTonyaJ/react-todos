import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList(){
    const [todo, setTodo] = useState([]);

    const addTodo = (newTodo) => {
        setTodo(todo => [...todo, newTodo]);
    }

    return(
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todo.map(todo => 
                    (<Todo key={todo.id} task={todo.formData}/>))}
            </ul>
        </div>
    );
}

export default TodoList;