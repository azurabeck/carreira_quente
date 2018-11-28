import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'


export class SignIn extends Component {

  state = {
      email:'',
      password:''

  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }


  render() {

    const { authError, auth } = this.props
    if(auth.uid) { return <Redirect to='/' /> }

    return (
      <div className='contentCreate sigIn'>
       
       <label className='formPageTitle'>
              <span className='colorBlue'>Sign </span> In
        </label>
       
        <form className='form' onSubmit={this.handleSubmit}>
        
            <div className='formBlock'>            
                <label htmlFor='email' className='formTitle'>Email</label>
                <div className='formInput'>
                      <input type='email' id='email' onChange={this.handleChange}/> 
                </div>                           
            </div>

            <div className='formBlock'>            
                <label htmlFor='password' className='formTitle'>Password</label>
                <div className='formInput'>
                      <input type='password' id='password' onChange={this.handleChange}/>
                </div>        
            </div>

            <div className='formButton'>            
                <button className='enter mt-30'>Login</button>
                <div className='red-text center'>                
                    {authError ? <p>{authError}</p> : null}                
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
