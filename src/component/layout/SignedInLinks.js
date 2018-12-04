import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import MaterialIcons from 'material-icons-react'

const SignedInLinks = (props) => {

    return (
        <ul className='right'>
            <li> <NavLink to='/create'>NewPost</NavLink> </li>
            <li> <NavLink to='/signup'>Signup</NavLink> </li>
            <li className='login'> <a href='/' onClick={props.signOut}><MaterialIcons id='loggedOn' icon='how_to_reg'/></a> </li>
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