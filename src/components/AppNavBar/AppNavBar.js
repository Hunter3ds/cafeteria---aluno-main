import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap' ;
import './AppNavBar.css'

const AppNavBar = ()=>{
    return(
    <Navbar variant='dar4k' bg='dark'>
        <Container>
         
            <Nav className='me-auto'>
            <img className='logo' src='/imagens/logoSemFundo.png' alt='Logo pricipal'/>
                <Nav.Link >Bebidas</Nav.Link>
                <Nav.Link >Doces</Nav.Link>
                <Nav.Link >Contato</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default AppNavBar