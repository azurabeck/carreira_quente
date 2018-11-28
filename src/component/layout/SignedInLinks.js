import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

    return (
        <ul className='right'>
            <li> <NavLink to='/create'>NewPost</NavLink> </li>
            <li> <a onClick={props.signOut}>Log Out</a> </li>
            <li> <NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink> </li>
        </ul> 
    )
}

const mapDispatchToProps = (disptach) => {
    return {
        signOut: () => disptach(signOut())
    }
}

export default connect(null, mapDispatchToProps) (SignedInLinks)

/*

AQUI EU CRIO O MENU DOS LINKS QUE VAO SER EXIBIDOS QUANDO O USUÁRIO ESTIVER LOGADO

*/