import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

// COMPONENTS IMPORTS
import SignInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks';

const Navbar = (props) => {
    
    const { auth , profile} = props
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

    return (
        <header className='header-menu'>
            <nav className='nav-wrapper'> 
                {links}
            </nav> 
            <div className='clr'></div>
        </header>
    )
}



const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)


/*

AQUI É O HEADER POR INTEIRO

*/