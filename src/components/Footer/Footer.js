import React from 'react';
import { Col } from 'react-bootstrap';
import {ReactComponent as Heart} from '../../assets/heart-fill.svg'
import {ReactComponent as Github} from '../../assets/github.svg'

const Footer = () => {
    
    return(
        <Col className="text-center p-3" >
            Made with <Heart/> <a href="https://github.com/ireneelizabethsabu" target="_blank" rel="noreferrer"className="mx-1 mr-2" style={{color: '#dfe6e99c'}}>ireneelizabethsabu</a>
            <Github/>
        </Col>
    );
}

export default Footer;