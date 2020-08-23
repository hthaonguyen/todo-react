import React from 'react';
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";

class Todo extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         inputValue: '',
         toDoList: [],
         filterStatus: 'all',
      }
   }

   handleInputChange = (e) => {
      this.setState({inputValue: e.target.value})
   };

   handleKeyDown = (e) => {
      if(e.key === 'Enter' && e.target.value !== ''){
         this.setState({
            toDoList: this.state.toDoList.concat({
               value: this.state.inputValue,
               completed: false,
            })
         });
         this.setState({inputValue: ''})
      }
   };

   deleteTodoItem = (idx) => {
       let newList = [...this.state.toDoList];
       newList = newList.filter((item, i)=> i !== idx);
       this.setState({toDoList: newList});
   };

   handleChangeCheckbox = (e, idx) => {
      let newList = [...this.state.toDoList];
      newList[idx].completed = e.target.checked;
      this.setState({toDoList: newList});
   };

   calculateItemsLeft = () => {
      let newList = [...this.state.toDoList];
      let itemsLeft = newList.filter((item, idx)=> item.completed === false);
      return itemsLeft.length;
   };

   clearCompleted = () => {
      let newList = [...this.state.toDoList];
      newList = newList.filter((item)=>item.completed === false);
      this.setState({toDoList: newList});
   };

   handleFilter = (status) => {
      this.setState({filterStatus: status});
   };

   renderClearCompleted = () => {
      let allow = false;
      this.state.toDoList.forEach((item)=>{
         if(item.completed === true){
            allow = true;
         }
      });
      return allow ;
   };

   render() {
      const {toDoList, filterStatus} = this.state;
      let data;
      if(filterStatus === 'active'){
         data = toDoList.filter((item)=>item.completed === false);
      } else if(filterStatus === 'completed'){
         data = toDoList.filter((item)=>item.completed === true);
      } else {
         data = toDoList;
      }
      return(
         <div className='todo'>
            <p>TO DO</p>
            <input
               className='input'
               placeholder='What need to be done ???'
               value={this.state.inputValue}
               onChange={this.handleInputChange}
               onKeyDown={this.handleKeyDown}
            />
            {
               data.map((todo, idx)=>{
                  return(
                    <ToDoItem
                       todo={todo}
                       idx={idx}
                       onDelete={this.deleteTodoItem}
                       onStatusChange={this.handleChangeCheckbox}
                       //event on change
                    />
                  )
               })
            }
            {
               toDoList.length > 0 &&
                  <Footer
                     filterStatus={filterStatus}
                     renderClearCompleted={this.renderClearCompleted()}
                     itemsLeftNumber = {this.calculateItemsLeft()}
                     clearCompleted = {this.clearCompleted}
                     handleFilter={this.handleFilter}
                  />
            }
         </div>
      )
   }

}
export default Todo;