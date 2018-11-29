import React from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MaterialIcon from 'material-icons-react'

const PostList = (props) => {

    const { posts , auth } = props;

    return (
        <div>

            {
             posts && posts.map(post => {
                return (
                    <div className={auth.uid ? 'mb-35' : ''} key={post.id} >
                        <Link to={'/post/' + post.id}><PostSummary post={post} /></Link>       
                        {
                            auth.uid ? (
                                <div className='right'>
                                    <span className='mr-5'>
                                        <Link to={'/edit/' + post.id} key={post.id} >
                                            <MaterialIcon icon='edit' id='adminButton'/>
                                        </Link>
                                    </span>
                                    <span><MaterialIcon icon='delete' id='adminButton'/></span>
                                </div>
                            ) : ''
                        }                              
                    </div>
                ) 
             })   
            }                   
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(PostList)
