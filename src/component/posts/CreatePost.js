import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { createPost , editPost } from '../../store/actions/postActions'
import { Redirect } from 'react-router-dom'

// EXTERNAL LIBRARY
import { Row, Col } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

let imageDefault = 'https://i.pinimg.com/564x/36/43/bb/3643bbfca40d688554c770adfd42f039.jpg'

export class CreatePost extends Component {

  constructor(props) {
    super(props)

    const { post } = this.props

    this.state = { 
      title: post ? post.title : '', 
      content: post ? post.content : '',
      subtitle: post ? post.subtitle : '',
      image:  post ? post.image : imageDefault,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this) 

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

  handleUpdate = (e) => {
    e.preventDefault();   

    const firebaseId = this.props.match.params.id

    this.props.editPost(this.state, firebaseId);
    this.props.history.push('/')   
  }

  render() {

    const { auth , match } = this.props
    const isEdit = match.url.indexOf('edit') !== -1;
    
    if(!auth.uid) {
        return <Redirect to='/signin' /> 
    }

 

    return (
      <div className='contentCreate'>
       
       <label className='formPageTitle'>
              <span className='colorBlue'> {isEdit ? 'Edit' : 'Create'} </span> post
        </label>
       
        <form className='form' onSubmit={isEdit ? this.handleUpdate : this.handleSubmit}>
       
              <Row className='formField'>
              
                    <Col md={6} className='formField'>


                          <div className='formBlock'>
                              <label htmlFor='image' className='formTitle'>Image URL</label>
                              <div className='formInput'>
                                    <input 
                                        type='text' id='image' 
                                        onChange={this.handleChange} value={this.state.image}/> 
                              </div>
                            </div>

                            <div className='formBlock'>
                            
                              <label className='imageDetails onViewMode'>                              
                                    <img className='imageOnViewMode' alt='' src={this.state.image}/>                
                              </label> 
                            
                            </div>
                              
                    </Col>

                    <Col md={6} className='formField'>
                    
                            <div className='formBlock'>            
                                <label htmlFor='title' className='formTitle'>Title</label>
                                <div className='formInput'>
                                    <input type='text' id='title' onChange={this.handleChange} value={this.state.title}/> 
                                </div>           
                            </div>

                            <div className='formBlock'>            
                                <label htmlFor='subtitle' className='formTitle'>Subtitle</label>
                                <div className='formInput'>
                                    <input type='text' id='subtitle' onChange={this.handleChange} value={this.state.subtitle}/> 
                                </div>           
                            </div>

                            <div className='formBlock'>                      
                                <label htmlFor='content'>Post Content</label>
                                <div className='formInput'>
                                    <ReactQuill 
                                      className='materialize-text-area' 
                                      modules={CreatePost.modules}
                                      formats={CreatePost.modules}
                                      id='content' 
                                      onChange={e => {this.setState({content: e})}}
                                      value={this.state.content}/> 
                                </div>                 
                            </div>
                    
                    </Col>
              
              </Row>

              <div className='formButton'>            
                  <button className='enter' type='submit'>{ isEdit ? 'Save' : 'Create'}</button>            
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
    createPost: (post) => dispatch(createPost(post)),
    editPost: (post, firebaseId) => dispatch(editPost(post, firebaseId))
  }
}

CreatePost.modules = {
  toolbar: [    
    [{'header' : '1'}, {'header' : '2'}, {'font' : []}]  ,
    [{'size' : []}]  ,
    ['bold' , 'italic' , 'underline' , 'strike' , 'bloquote']  ,
    [{'list' : 'ordered'} , {'list' : 'bullet'}]  ,
    ['link', 'image', 'video']  ,
    ['clean'] ,
    ['code-block']
  ]
}

CreatePost.formats = [
  'header', 'font', 'size' , 
  'bold' , 'italic' , 'underline' , 'strike' , 'blockquote' ,
  'list' , 'bullet' ,
  'link' , 'image' , 'video' , 'code-block'
]

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
      { collection: 'posts' }
  ])
)(CreatePost)
