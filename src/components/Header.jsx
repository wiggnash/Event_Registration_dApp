import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const connectWallet = async () => {
    try{
        if(window.ethereum){
            await window.ethereum.request({method:'eth_requestAccounts'})
        }
    }catch(error){
        console.log(error)
    }

    const accounts = await window.ethereum.request({method:'eth_accounts'})
    console.log(accounts);
    const accountAddress = document.getElementById("connect-wallet");
    accountAddress.innerHTML = accounts;
}

const Header = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary pt-4 pb-4" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">dApp Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Events</Nav.Link>
          </Nav>
          <Button variant="primary" id="connect-wallet" onClick={connectWallet} className='mx'>Connect Wallet</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header