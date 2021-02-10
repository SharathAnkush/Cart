import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse,Navbar,Nav,NavbarBrand,NavLink,NavItem,NavbarText} from 'reactstrap'

export default function HeaderNav() {
    return (
        <div>
            <Navbar color='info' light expand='md' >
                <NavbarBrand  className='text-white'>LOGO</NavbarBrand>
                <Collapse navbar>
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
                        <NavLink  className='text-white'>Cart</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
