import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const NewTodoForm = ({addTodo}) => {
    const [formData, setFormData] = useState('');

    const handleChange = (e) => {
        setFormData(e.target.value ? e.target.value: "");
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        addTodo({formData, id:uuid()});
        setFormData("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Todo List:</h3>
            <input 
            type='text'
            placeholder='Enter Task'
            name='task'
            value={formData}
            onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;