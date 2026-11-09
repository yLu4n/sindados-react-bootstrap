import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
    setUserProfile(isLoggedIn ? null : { name: 'Visitante' });
  }

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="site-navbar">
      <Container>
        <Navbar.Brand href="#inicio" className="fw-bold">SINDADOS-BA</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Início</Nav.Link>
            <Nav.Link href="#noticias">Notícias</Nav.Link>
            <Nav.Link href="#pisos">Pisos salariais</Nav.Link>
            {isLoggedIn && <Navbar.Text className="ms-lg-3">Olá, {userProfile?.name}</Navbar.Text>}
            <Button
              className="ms-lg-3 my-2 my-lg-0"
              variant={isLoggedIn ? 'outline-light' : 'danger'}
              size="sm"
              onClick={toggleLogin}
            >
              {isLoggedIn ? 'Sair' : 'Login'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;
