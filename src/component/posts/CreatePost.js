import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { createPost } from '../../store/actions/postActions'
import { Redirect } from 'react-router-dom'

// EXTERNAL LIBRARY
import { Row, Col } from 'react-bootstrap'


export class CreatePost extends Component {

  state = {
      title: '',
      content:'',
      image: ''
  }

  
  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push('/')
  }

  render() {

    const { auth , post} = this.props

    if(!auth.uid) {
        return <Redirect to='/signin' /> 
    }
    
    return (
      <div className='contentCreate'>
       
       <label className='formPageTitle'>
              <span className='colorBlue'> {post ? 'Edit' : 'Create'} </span> post
        </label>
       
        <form className='form' onSubmit={this.handleSubmit}>
       
              <Row className='formField'>
              
                    <Col md={6} className='formField'>


                          <div className='formBlock'>
                              <label htmlFor='image' className='formTitle'>Image URL</label>
                              <div className='formInput'>
                                    <input type='text' id='image' onChange={this.handleChange}/> 
                              </div>
                            </div>

                            <div className='formBlock'>
                            
                              <label className='imageDetails onViewMode'>                              
                                    <img className='imageOnViewMode' alt='' src={this.state.image} />                
                              </label> 
                            
                            </div>
                              
                    </Col>

                    <Col md={6} className='formField'>
                    
                            <div className='formBlock'>            
                                <label htmlFor='title' className='formTitle'>Title</label>
                                <div className='formInput'>
                                    <input type='text' id='title' onChange={this.handleChange}/> 
                                </div>           
                            </div>

                            <div className='formBlock'>                      
                                <label htmlFor='content'>Post Content</label>
                                <div className='formInput'>
                                    <textarea className='materialize-text-area' id='content' onChange={this.handleChange}/> 
                                </div>                 
                            </div>
                    
                    </Col>
              
              </Row>

              <div className='formButton'>            
                  <button className='enter' type='submit'>Create</button>            
              </div>
        
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null
  return {
      post: post,
      auth: state.firebase.auth
  }
}



const mapDispatchToProps = (dispatch) => {
  return {    
    createPost: (post) => dispatch(createPost(post))
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
      { collection: 'posts' }
  ])
)(CreatePost)
