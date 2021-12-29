import React from 'react';

function Todo({task}){
    return(
        <div className='todos'>
        <li>{task}</li>
        <button className='rm-btn'>X</button>
        </div>
    );
}

export default Todo;