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
            order: 'desc'
        }
    }

    updateQuery = (query) => {
        this.setState({query})
        if(query) {
            this.setState({ showPost: query });
        }
    }

    setNewest = () => {
        this.setState({order: 'desc'})
    }
  
    setOldest = () => {
        this.setState({order: 'asc'})        
    }
  

    render() {

        const { posts } = this.props

        return(
            <section id='blogger'>

                <Brand brand='default'/>

                <Grid>
                    <Row>                
                        <Col md={8}>                    
                            <PostList posts={posts} query={this.state.query} />
                        </Col>                
                            
                        <Col md={4}>  
                            <Search 
                                onChange={(event) => this.updateQuery(event.target.value)} 
                                query={this.state.query}/>
                            <Recent />                  
                            <Sorter  setNewest={this.setNewest} setOldest={this.setOldest}/>
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
    firestoreConnect(
        [{ collection: 'posts' , orderBy: ['createdAt', 'desc']}]
    )   
)(Dashboard)