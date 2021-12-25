import React from 'react';
import { Container, Row, Col, } from 'reactstrap';
import cn from 'classnames';
import Cart from './cart'

import logo from '../../assets/images/logo.svg'
import searchIcon from '../../assets/images/search-icon.svg'
import './index.scss'

const Header = ({ onChange }) => {
    return (
        <div className="header">
            <Container >
                <Row>
                    <Col md={3}>
                        <img src={logo} alt="Hepsiburada" />
                    </Col>
                    <Col >
                        <div className="search-input">
                            <img src={searchIcon} className="search-icon" alt="search" />
                            <input type="text" onChange={onChange} placeholder="25 milyon’dan fazla ürün içerisinde ara" />
                        </div>
                    </Col>
                    <Col md={2} className="text-end">
                        <Cart />
                    </Col>
                </Row>
            </Container>
        </div >

    );
};
export default Header;