import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Row, Col } from 'react-bootstrap'

// COMPONENT IMPORT
import Brand from '../layout/Brand'
import Notifications from './Notifications'
import PostList from '../posts/PostList'

class Dashboard extends Component {

    render() {

        const { posts } = this.props

        return(
            <section id='blogger'>

                <Brand brand='default'/>

                <Row>                
                    <Col md={9}>                    
                        <PostList posts={posts} />
                    </Col>                
                        
                    <Col md={3}>                    
                        <Notifications />
                    </Col>
                </Row>

            </section>
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
)(Dashboard)