import React, {Component} from 'react';

class Search extends Component {


  render() {

    
    return (
      <div className='sidebar'>
            
            <h2>Search</h2>

            <div className='search' >
       
                    <input type='text' className='searchField' placeholder='Enter title of your post' />             

            </div>
      </div>
    )
  }
}


export default (Search);