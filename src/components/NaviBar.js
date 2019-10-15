import React from 'react'
import { Navbar } from 'react-bootstrap';
import brandlogo from  '../img/brandlogo.svg'

export default function NaviBar() {
    return (
        <Navbar className='nav navbar navbar-light bg-dark font-weight-bold text-white' expand="lg">
            <Navbar.Brand className='' href="#home">Rock-Paper-Scissors</Navbar.Brand>
            <img className='logo img-fluid ml-auto' src={brandlogo} alt='brand'></img>           
        </Navbar>

    )
}
