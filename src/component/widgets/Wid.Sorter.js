import React, {Component} from 'react';

// EXTERNAL LIBRARY 
import MaterialIcon from 'material-icons-react'

class Sorter extends Component {

  state = {
    activeTimeD: true,
    activeTimeA: false,
  }

  render() {

    
    return (
      <div className='sidebar'>
            
            <h2>Sorter by</h2>

            <div className='sorter' >
       
                <span onClick={(e) => this.setState(prevState => ({ activeTimeA: false, activeTimeD: true }))}>
                    <button value='timestamp-descending' 
                        className={this.state.activeTimeD ? 'active' : ''}>
                            {this.state.activeTimeD ? <MaterialIcon id='iconSelected' icon='arrow_right' /> : ''}
                            <span>Newest</span>
                    </button>    
                </span>

                <span onClick={(e) => this.setState({activeTimeA: true, activeTimeD: false})}>
                    <button value='timestamp-ascending' 
                        className={this.state.activeTimeA ? 'active' : ''}>
                            {this.state.activeTimeA ? <MaterialIcon id='iconSelected' icon='arrow_right' /> : ''}
                            <span>Oldest</span>
                    </button> 
                </span>  

            </div>
      </div>
    )
  }
}



export default (Sorter);