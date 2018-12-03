import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Grid, Row, Col } from 'react-bootstrap'
import escapeRegExp from 'escape-string-regexp'

// COMPONENT IMPORT
import Brand from '../layout/Brand'
import PostList from '../posts/PostList'
import Sorter from '../widgets/Wid.Sorter'
import Search from '../widgets/Wid.Search'
import Recent from '../widgets/Wid.Recent'

class Dashboard extends Component {


    constructor(props) {
        super(props)
        this.state = {
            query: '',
            showPost: []
        }
    }

    updateQuery = (query) => {
        this.setState({query})
        if(query) {
            this.setState({ showPost: query });
        }
    }


    render() {

        const { posts } = this.props
        const { query } = this.state;
        let showingPost

        if(query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingPost = posts.filter((post) =>
                match.test(post.title))
        } else {
            showingPost = posts
        }

        console.log(showingPost)

        return(
            <section id='blogger'>

                <Brand brand='default'/>

                <Grid>
                    <Row>                
                        <Col md={8}>                    
                            <PostList posts={showingPost} />
                        </Col>                
                            
                        <Col md={4}>  
                            <Search 
                                posts={posts} 
                                onChange={(event) => this.updateQuery(event.target.value)} 
                                query={this.state.query}/>
                            <Recent />                  
                            <Sorter />
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