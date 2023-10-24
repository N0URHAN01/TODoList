import React, { useState } from "react";

const Todoform = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
   
      e.preventDefault();  // prevent default action,
      if (value) {
       
        addTodo(value);   // add todo
        
        setValue('');   // add todo
      }
    };
return (
  <form onSubmit={handleSubmit} className="TodoForm">
  <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
  <button type="submit" className='todo-btn'>Add Task</button>
</form>
)
}
export default Todoform;