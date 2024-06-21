import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useWindowSize } from "@uidotdev/usehooks";

const CheckoutHeader: React.FC = () => {
    const size = useWindowSize();

    return <div className="cart-header-div">
        <Container fluid style={{height: '100%', position: 'relative'}}>
            <Row className="no-gutters" style={{height: '100%', position: 'relative'}}>
                <Col>
                    <span className="cart-title">CHECKOUT</span>
                </Col>
                <Col>
                    <div className="cartBag">
                        <img src="/assets/images/Group-15379.png" width="100%"  />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default CheckoutHeader