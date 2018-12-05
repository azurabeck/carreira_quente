import React, {Component} from 'react';
import moment from 'moment'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

class Recent extends Component {

  render() {

    const { posts } = this.props

    return (
      <div className='sidebar'>
            <div className='sidebarBlock'>  
                <h2>Recent on blog</h2>
                <Row className='mt-30 mb-20'>
                      {
                        posts && posts.slice(0,1).map(post => {
                          return (
                            <Link to={`/post/${post.id}`}>
                                <Row key={post.id}>

                                      <Col md={5} className='recentPostImage'>
                                          <label className='image'>    
                                              <img src={post.image} alt='' />    
                                          </label>
                                          
                                          <label className='firstNew'>01</label>
                                      </Col>

                                      <Col md={7} className='recentPostDes'>                                  
                                        <label className='title'>{post.title}</label>
                                        <label className='authorAndDate'>{post.authorFirstName} {post.authorLastName}</label>
                                      </Col>
        
                                </Row>
                            </Link>
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
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt' , 'desc'] }
  ])   
)(Recent)