import React from 'react';
import { Col } from 'react-bootstrap';
import {ReactComponent as Heart} from '../../assets/heart-fill.svg'
import {ReactComponent as Github} from '../../assets/github.svg'

const Footer = () => {
    const style={
        backgroundColor: '#e9ecef'
    }
    return(
        <Col className="text-center p-3" style={style}>
            Made with <Heart/> <a href="https://github.com/ireneelizabethsabu" className="mx-1 mr-2">ireneelizabethsabu</a>
            <Github/>
        </Col>
    );
}

export default Footer;