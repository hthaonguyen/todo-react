import React from 'react';

class ToDoItem extends React.Component{
   onStatusChange = (e) => {
      this.props.onStatusChange(e.target.checked, this.props.idx)
   };
   render() {
      return(
         <div className='todo-item'>
            <input className='mr-3' type='checkbox'
                   checked={this.props.todo.completed}
                   onChange={this.onStatusChange}
            />
            <div className={this.props.todo.completed && 'item-deleted'}>
            {this.props.todo.value}
            </div>
            <div className='icon-delete' onClick={()=>this.props.onDelete()}>X</div>
         </div>
      )
   }

}
export default ToDoItem;