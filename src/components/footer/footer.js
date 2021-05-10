import React from 'react';
import { Navbar } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Navbar sticky="top" >
                <p style={{ color: 'gray' }}>Footer</p>
            </Navbar>
        )
    }
}

export default Footer;