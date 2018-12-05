import React from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { Row , Col } from 'react-bootstrap'

// COMPONENTS IMPORT 
import renderHTML from 'react-render-html'

const PostDetails = (props) => {

    const { post } = props;

    if (post) {
        return (
            <section id='postDetails'>

                <Row>

                    <Col md={12}>
                    
                            <Row>
                                <Col md={12}>

                                    <ul className='postDetails onViewMode'>
                                        <li>Posted by <span>{post.authorFirstName} {post.authorLastName}</span></li>
                                        <li>Post at: <span>{moment(post.createdAt.toDate()).calendar()}</span></li>
                                    </ul>

                                </Col> 

                                <Col md={12} className='mt-40'>
                                
                                    <label className='postTitle onViewMode'>{post.title}</label>
                                    <label className='postSub onViewMode'>{post.subtitle}</label>
                                </Col>

                                <Col md={12} className='mt-15'>

                                    <label className='imageDetails onViewMode'>                        
                                        <img className='imageOnViewMode' src={post.image} alt=''/>                        
                                    </label>
                                
                                </Col>

                                <Col md={12}>
                                    <p className='postText onViewMode'>{renderHTML(post.content)}</p>  
                                </Col>
                            </Row>
                    
                    </Col>

                </Row>

            </section>
        )
    } else {
        return (
            <div className='container center'>
                <p>Loading post</p>
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails)
