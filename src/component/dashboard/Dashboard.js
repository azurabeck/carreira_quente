import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Grid, Row, Col } from 'react-bootstrap'

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

                <Grid>
                    <Row>                
                        <Col md={8}>                    
                            <PostList posts={posts} />
                        </Col>                
                            
                        <Col md={4}>                    
                            <Notifications />
                        </Col>
                    </Row>
                </Grid>
                

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
    firestoreConnect([{ collection: 'posts' , orderBy: ['createdAt', 'desc'] }])   
)(Dashboard)