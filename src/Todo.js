import React from 'react';

function Todo({id, task, remove}){
    
    const handleRemove = () => remove(id);

    return(
        <div className='todos'>
        <li>{task}</li>
        <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Todo;