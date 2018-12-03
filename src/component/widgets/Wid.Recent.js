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
                <Row>
                      {
                        posts && posts.slice(0,1).map(post => {
                          return (
                            <div key={post.id}>
                                <div className='recent-post'>
                                    <label className='image'>
    
                                        <img src={post.image} alt='' />
    
                                    </label>
    
                                    <label className='title'>{post.title}</label>
                                    <label className='authorAndDate'>{post.authorLastName} {post.authorFirstName} * {moment(post.createdAt.toDate()).calendar()}}</label>
                                    <span className='readBtn' ><Link to={`/post/${post.id}`}>Read More</Link></span>
                                    
                                </div>      
                            </div>
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