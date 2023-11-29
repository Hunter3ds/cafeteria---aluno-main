import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap' ;
import './AppNavBar.css'

const AppNavBar = ()=>{
    <Navbar expanded='lg' className='bg-body-tertiary' bg='dark'>
        <Container></Container>
        <Navbar.Brand href>
            <img className='' src='' alt='logo Principal'/>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Link href='#bebidas'>Bebidas</Nav.Link>
                    <Nav.Link href='#doces'>Doces</Nav.Link>
                    <Nav.Link href='#contato'>Contatos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar.Brand>
    </Navbar>
}

export default AppNavBar