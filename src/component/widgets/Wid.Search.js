import React, {Component} from 'react';
import escapeRegExp from 'escape-string-regexp'

let showingPost

class Search extends Component {

  render() {

    return (
      <div className='sidebar'>
            <div className='sidebarBlock'>  
              <h2>Search</h2>

              <div className='search' >
        
                      <input 
                        type='text' className='searchField mb-20' 
                        placeholder='Enter your post title'    
                        value={this.props.query}    
                        onChange={this.props.onChange}       
                      />              

              </div>
            </div>
      </div>
    )
  }
}


export default (Search);