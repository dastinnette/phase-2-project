import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return(
            <Navbar expand="lg" className="bg-body-tertiary" style={{background: 'linear-gradient( #000000,#001F3F)', color:"#FFD100", boxShadow: '0 9345345px 10545px rgba(0, 0, 0, .5)',}}>
                <Container>
                    <NavLink className="nav-links" to={"/"} style={{color:"#FFD100"}}>Starviews</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-links" to={"/Gallery"} style={{color:"#FFD100",}}>Gallery</NavLink>
                        <NavLink className="nav-links" to={"/New"} style={{color:"#FFD100",}}>Add to gallery</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavBar;