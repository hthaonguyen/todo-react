import React from 'react';



function ToDoItem (props) {
   const onStatusChange = (e) => {
      props.onStatusChange(e.target.checked)
   };

   return(
      <div className='todo-item'>
         <input className='mr-3' type='checkbox'
                checked={props.todo.completed}
                onChange={onStatusChange}
         />
         <div className={props.todo.completed && 'item-deleted'}>
         {props.todo.value}
         </div>
         <div className='icon-delete' onClick={()=>props.onDelete()}>X</div>
      </div>
   )
}
export default ToDoItem;