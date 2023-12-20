import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Banner1Section: React.FC = () => {
    return <section className="bannerSection1">
        <Container fluid>
            <Row className="no-gutters">
                <Col className="px-0">
                    <img src="/assets/images/PHOTO-2023-11-23-12-05-59-2.jpg" width='100%' />
                </Col>
                <Col>
                    <Row className="align-items-center" style={{height: '100%', textAlign: 'center', padding: '80px'}}>
                        <Col>
                            <Row>
                                <h1 className="c-title">There's a Sauce for Everyone</h1>
                            </Row>
                            <Row>
                                <p className="header-body-text">
                                    All your favorite tastes, plus some new goodies.
                                </p> 
                                <p className="mt-4">
                                    <Button className="header-button"><b>Dig In</b></Button>
                                </p> 
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Banner1Section