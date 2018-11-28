import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

const PostSummary = (props) => {

    const { post , auth } = props;

    return (
        <div className='post-list section'>
        
            <Row className='postBlock'>
                
                <Col md={4} className='imageDetails'>
                    <img src={post.image} alt=''/>
                </Col>

                <Col md={8}>
                    <label className='postTitle'>{post.title}</label>          
                    <label className='postDescription'>{post.content} </label>
                    <ul className='postDetails'>
                        <li>Author: <span>{post.authorLastName} {post.authorFirstName}</span></li>
                        <li>Post at: <span>{moment(post.createdAt.toDate()).calendar()}</span></li>
                    </ul>
                </Col>

                {
                    auth.uid ? 
                        (
                            <Col md={12} className='bloggerButton'>
                                    <span className='readBtn mr-5'><Link to='/'>Edit</Link></span>
                                    <span className='readBtn'><Link to='/'>Delete</Link></span>
                            </Col>
                        ) : ''
                }
                
                

            </Row>
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(PostSummary)