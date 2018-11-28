import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <Row className='nav-menu'>
            <Col md={6}>
                <ul>
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li> <NavLink to="/blogger">Blogger</NavLink> </li>
                    <li> <NavLink to="/about">About</NavLink> </li>
                </ul> 
            </Col>
            <Col md={6}>
                <ul className='right'>
                    <li> <NavLink to='/signup'>Signup</NavLink> </li>
                    <li> <NavLink to='/signin'>Login</NavLink> </li>
                </ul> 
            </Col>
        </Row>
    )
}

export default SignedOutLinks
