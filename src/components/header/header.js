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
            <Navbar bg="dark" variant="dark" className="fixed-top px-5">
                <Navbar.Brand href="/">Alok Kumar Singh</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {console.log("herre.. ", this.state.activeKey)}
                    <Nav className="justify-content-end" style={{ width: "100%" }}
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;