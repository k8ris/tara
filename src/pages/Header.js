import {Link} from 'react-router-dom';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClose = () => setMenuOpen(false)
  return (
    <>
        <Navbar expand={false} className="mb-3">
          <Container fluid>
          <Navbar.Brand className="mx-auto">
            <img
              src="img/tara-slika.jpg"
              width="300"
              height="100"
              className="d-inline-block align-top"
              alt="Rodic Tara"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} onClick={toggleMenu}  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
              show={menuOpen}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link  as={Link} to="/home" onClick={toggleMenu} >Home</Nav.Link>
                  <NavDropdown title="Past exibitions" id="navbarScrollingDropdown">
                    <NavDropdown.Item  as={Link} to="/exibition22" onClick={toggleMenu}>Prodajna galerija 2022</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/exibition20" onClick={toggleMenu}>Galerija Progres</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/exibition19" onClick={toggleMenu}>Ulus</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/prozor" onClick={toggleMenu}>Prozor</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/virtuelna" onClick={toggleMenu}>Virtuelna izlozba</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link  as={Link} to="/past-exibitions" onClick={toggleMenu}>Past exibitions</Nav.Link>
                  <Nav.Link  as={Link} to="/paintings" onClick={toggleMenu} >Paintings</Nav.Link>
                  <Nav.Link  as={Link} to="/work-on-paper" onClick={toggleMenu} >Work on paper</Nav.Link>
                  <Nav.Link  as={Link} to="/bio" onClick={toggleMenu} >Bio</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}