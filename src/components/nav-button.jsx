import React from 'react'
import {Button, Nav} from 'react-bootstrap'

export const NavButton = ({text}) => {
    return (
        <Nav.Link href={text}>text</Nav.Link>
    )
}

export default NavButton;
