import React from 'react'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'

const PostSummary = ({post}) => {
    return (
        <div className='post-list section'>
        
            <Row className='postBlock'>
                
                <Col md={4} className='imageDetails'>
                    <img src='' alt=''/>
                </Col>

                <Col md={8}>
                    <label className='postTitle'>{post.title}</label>          
                    <label className='postDescription'>{post.content} </label>
                    <ul className='postDetails'>
                        <li>Author: <span>{post.authorFirstName} {post.authorLastName}</span></li>
                        <li>Post at: {moment(post.createdAt.toDate()).calendar()}</li>
                    </ul>
                </Col>
                
            </Row>
        
        </div>
    )
}

export default PostSummary