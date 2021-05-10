import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: "/home"
        };
    }

    updateActiveKey = key => {
        this.setState({ activeKey: key });
    }

    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top px-5">
                <Navbar.Brand as={Link} to="/home">Alok Kumar Singh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end mr-auto" style={{ width: "100%" }}
                        activeKey={`${this.state.activeKey}`}
                        onSelect={(selectedKey) => this.updateActiveKey(selectedKey)
                        }
                    >
                        <Nav.Item>
                            <Nav.Link as={Link} eventKey={"/home"} to="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} eventKey={"/experience"} to="/experience">Experience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} eventKey={"/projects"} to="/projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} eventKey={"/skills"} to="/skills">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} eventKey={"/contact"} to="/contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="svg_icon">
                            <Nav.Link href="https://www.linkedin.com/in/alok-kumar-singh-93937792/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="svg_icon" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" /></svg>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="svg_icon">
                            <Nav.Link href="mailto: alok18121991@gmail.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="svg_icon" d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" /></svg>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;