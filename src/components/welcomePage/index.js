import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';
import port from '../../images/port_test.png'
import triGlow from '../../images/triGlow.png'
import { Power2, TweenMax } from 'gsap';
import callParallax from './parallax.js';

class Welcome extends React.Component {
    render() {
        let callParallaxMethod = function (e) {
            callParallax(e, 'photo-container', 'img1', 'img2');
        }
        return (
            <div className="welcome-content">
                <div class="container2 rel-container">
                    <div className="half-dark"></div>
                    <div className="half-light"></div>
                </div>
                <div class="photo-container" onMouseMove={(e) => callParallaxMethod(e)} onTouchMove={(e) => callParallaxMethod(e)}>
                    <div class="container2 pt-5">
                        <img src={triGlow} id="triGlow" className="img1" />
                        <img src={port} id="portrait-img" className="img2" />
                    </div>
                </div>
                <h1>HELLO WORLD</h1>
            </div>
        )
    }
}

export default Welcome;