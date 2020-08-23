import React from 'react';
import ToDoItem from "./ToDoItem";

class Todo extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         inputValue: '',
         toDoList: [],
      }
   }

   handleInputChange = (e) => {
      this.setState({inputValue: e.target.value})
   };

   handleKeyDown = (e) => {
      if(e.key === 'Enter'){
         this.setState({toDoList: this.state.toDoList.concat({value: this.state.inputValue})})
         this.setState({inputValue: ''})
      }
   };

   deleteTodoItem = (idx) => {
       let newList = [...this.state.toDoList];
       newList = newList.filter((item, i)=> i !== idx);
      this.setState({toDoList: newList});
   };

   render() {
      const {toDoList} = this.state;
      return(
         <div className='todo'>
            <p> TO DO</p>
            <input
               className='input'
               placeholder='What need to be done ???'
               value={this.state.inputValue}
               onChange={this.handleInputChange}
               onKeyDown={this.handleKeyDown}
            />
            {
               toDoList.map((todo, idx)=>{
                  return(
                    <ToDoItem
                       todo={todo}
                       idx={idx}
                       deleteTodoItem={this.deleteTodoItem}
                    />
                  )
               })
            }
         </div>
      )
   }

}
export default Todo;