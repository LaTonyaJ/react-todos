import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList(){
    const [todo, setTodo] = useState([]);

    const addTodo = (newTodo) => {
        setTodo(todo => [...todo, newTodo]);
    }

    const remove = (id) => {
        console.log('removing')
        setTodo(todo => todo.filter(t => t.id !== id));
    }

    return(
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todo.map(todo => 
                    (<Todo
                     id={todo.id}    
                     key={todo.id} 
                     task={todo.formData} 
                     remove={remove}
                    />))}
            </ul>
        </div>
    );
}

export default TodoList;