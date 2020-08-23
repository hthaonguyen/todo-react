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
       let newList = this.state.toDoList.filter((item, i)=> i !== idx);
       this.setState({toDoList: newList});
   };

   handleCheckboxChange = (checked, idx) => {
      let newList = [...this.state.toDoList];
      let completedItem =  {...newList[idx], completed: checked};
      newList[idx] = completedItem;
      this.setState({toDoList: newList});
   };

   calculateItemsLeft = () => {
      let itemsLeft = this.state.toDoList.filter((item, idx)=> !item.completed);
      return itemsLeft.length;
   };

   clearCompleted = () => {
      let newList = this.state.toDoList.filter((item)=> !item.completed);
      this.setState({toDoList: newList});
   };

   handleFilter = (status) => {
      this.setState({filterStatus: status});
   };

   renderClearCompletedButton = () => {
       return this.state.toDoList.some((item)=>{
         return (item.completed === true);
      });

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
                       onDelete={()=>this.deleteTodoItem(idx)}
                       onStatusChange={(checked)=>this.handleCheckboxChange(checked, idx)}
                       //event on change
                    />
                  )
               })
            }
            {
               toDoList.length > 0 &&
                  <Footer
                     filterStatus={filterStatus}
                     showClearButton={this.renderClearCompletedButton()}
                     itemsLeftNumber = {this.calculateItemsLeft()}
                     onClearChange = {this.clearCompleted}
                     onFilterChange={this.handleFilter}
                  />
            }
         </div>
      )
   }

}
export default Todo;