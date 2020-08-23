import React from 'react';

class ToDoItem extends React.Component{
   render() {
      return(
         <div className='todo-item'>
            <div>
            {this.props.todo.value}
            </div>
            <div className='icon-delete' onClick={()=>this.props.deleteTodoItem(this.props.idx)}>X</div>
         </div>
      )
   }

}
export default ToDoItem;