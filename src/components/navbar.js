import Navbar from 'react-bootstrap/Navbar';

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