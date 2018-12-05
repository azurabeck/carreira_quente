import React from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import { Row , Col } from 'react-bootstrap'

// COMPONENTS IMPORT 
import Brand from '../layout/Brand'
import renderHTML from 'react-render-html'

const PostDetails = (props) => {

    const { post } = props;

    if (post) {
        return (
            <section>

                <Brand brand='default'/>
                <Row className='content'>

                    <Col md={6} className='formContact'>                                
                        <label className='imageDetails onViewMode'>                        
                            <img className='imageOnViewMode' src={post.image} alt=''/>                        
                        </label>            
                    </Col>

                    <Col md={6}>                              
                        <label className='postTitle onViewMode'>{post.title}</label>
                        <ul className='postDetails onViewMode'>
                            <li>Posted by <span>{post.authorFirstName} {post.authorLastName}</span></li>
                            <li>Post at: <span>{moment(post.createdAt.toDate()).calendar()}</span></li>
                        </ul>
                        <p className='postText onViewMode'>{renderHTML(post.content)}</p>                    
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
