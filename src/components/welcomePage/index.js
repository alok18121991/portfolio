import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Welcome extends React.Component {
    render() {
        return (
            <div className="content">
                <Container fluid className='vert-align'>
                    <div className="App-header bg-dark border-top border-white" >
                        <Row className="p-5 w-50">
                            <Col>
                                <Image src="https://avatarfiles.alphacoders.com/812/thumb-1920-81215.png" roundedCircle className="profile_image border border-4 border-white" />
                            </Col>
                            <Col>
                                <div className="pt-5">
                                    <h2>I AM A DEVELOPER</h2>
                                </div>
                            </Col>
                        </Row>
                        
                    </div>
                </Container>
            </div>
        )
    }
}

export default Welcome;