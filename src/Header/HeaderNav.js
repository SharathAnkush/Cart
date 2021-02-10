import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse,Navbar,Nav,NavbarBrand,NavLink,NavItem,NavbarToggler} from 'reactstrap'

export default function HeaderNav() {
    const [isopen , setIsopen] = useState(false)
    const toggle = () => setIsopen(!isopen)
    return (
        <div>
            <Navbar color='info' light expand='md' >
                <NavbarBrand  className='text-white'>LOGO</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isopen}  navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink className='text-white'>SignIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  className='text-white'>Singout</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  className='text-white'>Logout</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  to="cart"  className='text-white'>Cart</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
