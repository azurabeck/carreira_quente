import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div className='nav-menu'>
            <ul>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/blogger">Blogger</NavLink> </li>
                <li> <NavLink to="/about">About</NavLink> </li>
            </ul> 
        </div>
    )
}

export default SignedOutLinks
