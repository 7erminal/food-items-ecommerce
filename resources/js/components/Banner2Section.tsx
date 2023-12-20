import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Banner2Section: React.FC = () => {
    return <section>
        <Marquee autoFill>
            <div className="marquee-tag">
                <div className="marquee-sub-tag">
                    <b>GET THAT SAUCE</b> &nbsp;&nbsp;&nbsp;
                </div>
            </div> 
        </Marquee>
        <div className="bannerSection2">
            <Container fluid style={{height: '100%'}}>
                <Row style={{height: '100%'}}>
                    <Col style={{height: '100%'}}>
                        <Row className="align-items-center" style={{height: '100%', textAlign: 'center'}}>
                            <Col>
                                <Row>
                                    <b><h1 className="large-title-text">
                                        Great for the planet. <br/>Great for business.
                                    </h1></b>
                                </Row>
                                <Row className="mt-4">
                                    From how we grow our plants to the materials that make up our packs, we’re stepping up with sustainability. Get ready, come 2050 - we will be carbon neutral.
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{height: '100%'}}>
                        <Row className="align-items-center" style={{height: '100%', textAlign: 'center', padding: '40px'}}>
                            <Col>
                                <Row className="mt-2">
                                    <Col xs={12} sm={12} md={8}>
                                        <div className="outline-box">
                                            <h1>CAN</h1>
                                        </div>
                                    </Col>
                                    <Col xs={0} sm={0} md={4}>
                                        <img src="/assets/images/koriGingerGarlicPaste.jpeg" width="100%" />
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col xs={0} sm={0} md={4}>
                                        <img src="/assets/images/koriKelewele.jpeg" width="100%" />
                                    </Col>
                                    <Col xs={12} sm={12} md={8}>
                                        <div>
                                            <b><h1 className="large-bold-text">YOU</h1></b>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        <div className="outline-box">
                                            <h1>DIG IT</h1>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
}

export default Banner2Section

