import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function ApplicationNavbar() {
    return (
        <div className="">
            <Navbar bg="light" expand="lg" className="justify-content-center">
                <Navbar.Brand href="#home">Wordle AI</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default ApplicationNavbar