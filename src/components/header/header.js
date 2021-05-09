import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            
                <Navbar bg="dark" variant="dark" className="fixed-top px-5"> 
                    <Navbar.Brand href="/">Alok Kumar Singh</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Item>
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/experience">Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/skills">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default Header;