import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Row, Col } from 'react-bootstrap'

const SignedInLinks = (props) => {

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
                    <li> <NavLink to='/create'>NewPost</NavLink> </li>
                    <li> <a onClick={props.signOut}>Log Out</a> </li>
                </ul> 
            </Col>
        </Row>
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