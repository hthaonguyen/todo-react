import React from 'react';

class ToDoItem extends React.Component{
   onStatusChange = () => {

   }
   render() {
      return(
         <div className='todo-item'>
            <input className='mr-3' type='checkbox'
                   checked={this.props.todo.completed}
                   onChange={(e)=>this.props.onStatusChange(e, this.props.idx)}
            />
            <div className={this.props.todo.completed && 'clear-item'}>
            {this.props.todo.value}
            </div>
            <div className='icon-delete' onClick={()=>this.props.onDelete(this.props.idx)}>X</div>
         </div>
      )
   }

}
export default ToDoItem;