import React from 'react';

class Footer extends React.Component{


   render() {
      return(
         <div className='footer'>
            <div>{this.props.itemsLeftNumber} item left</div>
            <div>
               <span
                  className={this.props.filterStatus === 'all' ?  'active' : null}
                  onClick={()=>this.props.handleFilter('all')}
               >
                  All
               </span>
               <span
                  onClick={()=>this.props.handleFilter('active')}
                  className={`pl-3 pr-3 ${this.props.filterStatus === 'active' ?  'active' : ''}`}
               >
                  Active
               </span>
               <span
                  className={this.props.filterStatus === 'completed' ?  'active' : null}
                  onClick={()=>this.props.handleFilter('completed')}
               >Completed
               </span>
            </div>
            {  this.props.renderClearCompleted &&
               <div onClick={() => this.props.clearCompleted()}>Clear Completed</div>
            }
         </div>
      )
   }
}
export default Footer;