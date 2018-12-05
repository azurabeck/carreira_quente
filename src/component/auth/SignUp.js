import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp , deleteUser } from '../../store/actions/authActions'
import { Row, Col } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

export class SignUp extends Component {

  state = {
      email:'',
      password: '',
      firstName: '',
      lastName:''

  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  handleClick = (userId, e) => {
    this.props.deleteUser(userId)
 }


  render() {

    const { auth , authError , users} = this.props
    if(!auth.uid) { return <Redirect to='/signin' /> }
    
    return (
      <div className='contentCreate'>

        <label className='formPageTitle'>
              <span className='colorBlue'>Create </span> admin
        </label>


        <div className='form'>
            <form onSubmit={this.handleSubmit}>
            
                <Row className='adminList'>

                    <Col md={3} className='colFom'>
                        <input type='text' id='firstName' className="inputAdmin" placeholder='First Name' onChange={this.handleChange}/>
                    </Col>    
                    <Col md={3} className='colFom'>
                        <input type='text' id='lastName' className="inputAdmin" placeholder='Last Name' onChange={this.handleChange}/>
                    </Col>    
                    <Col md={3} className='colFom'>
                        <input type='email' id='email' className="inputAdmin" placeholder='Email' onChange={this.handleChange}/>
                    </Col>    
                    <Col md={2} className='colFom'>
                        <input type='password' id='password' className="inputAdmin" placeholder='password' onChange={this.handleChange}/>
                    </Col>    
                    <Col md={1} className='colFom'>
                        <button className='btnAdmin'>Sign Up</button>
                    </Col>    

                    <Col md={12}>                            
                        <div className='text-red'> { authError ? <p>{authError}</p> : null } </div>
                    </Col>

                </Row>
            
                 
            </form>

                <Row>
                    <label className='userListTitle mt-25 mb-15'>User List</label>
                </Row>


                { users ? 
                
                    (
                        users.map((user) => {

                            const userId = user.id

                            return(
                                <Row key={user.id}>                                
                                    <Col md={3} className='colFom'>
                                        <input className="inputAdmin" defaultValue={user.firstName} readOnly></input> 
                                    </Col>  
                                    <Col md={3} className='colFom'>
                                        <input className="inputAdmin" defaultValue={user.lastName} readOnly></input> 
                                    </Col>  
                                    <Col md={5} className='colFom'>
                                        <input className="inputAdmin" defaultValue={user.email} readOnly></input> 
                                    </Col>  
                                    <Col md={1} className='colFom'>
                                        <div className='userDel' onClick={(e) => this.handleClick(userId, e)}>
                                            <MaterialIcon icon='delete' id='userButtonDelete'/>
                                        </div>
                                    </Col>    
                                </Row>
                            ) 
                            
                        })
                    )
                
                
                    : ''
                }            

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log('aqui' , state.firebase)
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        users: state.firestore.ordered.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
        deleteUser: (userId) => dispatch(deleteUser(userId))
    }
}
export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        firestoreConnect(
            [{collection: 'users'}]
        )    
    )(SignUp)


