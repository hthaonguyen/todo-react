import React from 'react';

class Footer extends React.Component{


   render() {
      console.log(this.props.showClearButton)
      return(
         <div className='footer'>
            <div>{this.props.itemsLeftNumber} item left</div>
            <div>
               <span
                  className={this.props.filterStatus === 'all' ?  'active' : null}
                  onClick={()=>this.props.onFilterChange('all')}
               >
                  All
               </span>
               <span
                  onClick={()=>this.props.onFilterChange('active')}
                  className={`pl-3 pr-3 ${this.props.filterStatus === 'active' ?  'active' : ''}`}
               >
                  Active
               </span>
               <span
                  className={this.props.filterStatus === 'completed' ?  'active' : null}
                  onClick={()=>this.props.onFilterChange('completed')}
               >Completed
               </span>
            </div>
            {  this.props.showClearButton &&
               <div onClick={() => this.props.onClearChange()}>Clear Completed</div>
            }
         </div>
      )
   }
}
export default Footer;