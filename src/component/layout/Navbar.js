import React from 'react'
import { Link , NavLink } from 'react-router-dom'
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
                <Row className='nav-menu'>
                    <Col md={6}>
                        <ul>
                            <li> <NavLink to="/">Home</NavLink> </li>
                            <li> <NavLink to="/blogger">Blogger</NavLink> </li>
                            <li> <NavLink to="/about">About</NavLink> </li>
                        </ul> 
                    </Col>
                    <Col md={6}>
                        {links}
                    </Col>
                </Row>
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