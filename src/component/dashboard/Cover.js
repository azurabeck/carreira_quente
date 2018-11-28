import React, { Component } from 'react'
import moment from 'moment'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

// COMPONENT IMPORT
import Brand from '../layout/Brand'

export class Cover extends Component {
  render() {

    const { posts } = this.props

    return (
      <div>
          <Brand brand='cover'/>

          <div className='content'>         
                
              <Row>
                    {
                      posts && posts.slice(0,4).map(post => {
                        return (
                          <Col md={3}>
                              <div className='recent-post'>
                                  <label className='image'>
  
                                      <img src={post.image} alt='' />
  
                                  </label>
  
                                  <label className='title'>{post.title}</label>
                                  <label className='authorAndDate'>{post.authorLastName} {post.authorFirstName} * {moment(post.createdAt.toDate()).calendar()}}</label>
  
                                  <span className='readBtn' ><Link to={`/posts/${post.id}`}>Read More</Link></span>
                              </div>      
                          </Col>
                        )
                      })   
                    } 

              </Row>
          
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state.firestore.ordered.posts
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'posts' }])   
)(Cover)