import React from 'react'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'

// EXTERNAL LIBRARY
import renderHTML from 'react-render-html'

const PostSummary = (props) => {

    const { post } = props;

    return (
        <div className='post-list section'>
        
            <Row className='postBlock'>
                
                <Col md={4} className='imageDetails'>
                    <img src={post.image} alt=''/>
                </Col>

                <Col md={8}>
                    <label className='postTitle'>{post.title}</label>   

                    <ul className='postDetails'>
                        <li>Author: <span>{post.authorLastName} {post.authorFirstName}</span></li>
                        <li>Post at: <span>{moment(post.createdAt.toDate()).calendar()}</span></li>
                    </ul>

                    <label className='postDescription'>{renderHTML(post.content)} </label>                   
                </Col>

                <Col md={12} className='right readMore'>Continuar lendo...</Col>
            </Row>
        
        </div>
    )
}

export default PostSummary