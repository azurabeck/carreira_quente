import React, {Component} from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MaterialIcon from 'material-icons-react'
import { deletePost } from '../../store/actions/postActions';

class PostList extends Component {

    handleClick(firebaseId) {
        console.log('aqui' , firebaseId)
        this.props.deletePost(firebaseId)
    }

    render() {

    const { posts , auth } = this.props;


    return (
        <div>

            {
             posts && posts.map(post => {
              
                const firebaseId = post.id

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
                                        <span onClick={() => this.handleClick(firebaseId)}>
                                            <MaterialIcon icon='delete' id='adminButton'/>
                                        </span>
                                    </span>
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
}



const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (firebaseId) => dispatch(deletePost(firebaseId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
