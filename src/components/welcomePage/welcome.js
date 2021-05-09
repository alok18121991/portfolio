import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Welcome extends React.Component {
    render() {
        return (
            <Container fluid className='vert-align'>
                <div className="App-header bg-dark border-top border-white" >
                    <Row className="p-5">
                        <Col xs={5} md={4}>
                            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" roundedCircle className="border border-4 border-white" />
                        </Col>
                    </Row>
                    <h2>I AM A DEVELOPER</h2>
                </div>
            </Container>
        )
    }
}

export default Welcome;