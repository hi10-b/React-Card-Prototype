import React from 'react'
import { Navbar } from 'react-bootstrap';
import { NavButton } from '../components/nav-button'

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <NavButton text='home'/>
        </Navbar>
    )
}

export default NavigationBar;
