import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return(
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink className="nav-links" to={"/"}>Starviews</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-links" to={"/Gallery"}>Gallery</NavLink>
                        <NavLink className="nav-links" to={"/New"}>Add to gallery</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavBar;