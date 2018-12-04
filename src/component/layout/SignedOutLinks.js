import React from 'react'
import { NavLink } from 'react-router-dom'
import MaterialIcons from 'material-icons-react'

const SignedOutLinks = () => {
    return (       
        <ul className='right'>
            <li className='login'> <NavLink to='/signin'><MaterialIcons id='loggedOut' icon='person'/></NavLink> </li>
        </ul> 
    )
}

export default SignedOutLinks
