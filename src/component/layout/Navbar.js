import React from 'react'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
    
    return (
        <header className='header-menu'>
            <nav className='nav-wrapper'> 
                    <SignedOutLinks />
            </nav> 
            <div className='clr'></div>
        </header>
    )
}



export default Navbar

/*

AQUI É O HEADER POR INTEIRO

*/