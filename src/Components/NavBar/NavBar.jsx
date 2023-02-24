import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>jmgDev</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='navLinks'>
            <div className='divLink'>
              <Link className='link'>ESP</Link>
            </div>
            <div className='divLink'>
              <Link className='link'>ENG</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
