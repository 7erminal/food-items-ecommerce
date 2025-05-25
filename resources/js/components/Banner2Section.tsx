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
                {/* <Row style={{height: '30%', paddingTop: '10px'}}>
                    <Col style={{height: '100%'}}>
                        <div style={{width: '100%', height: '100%', backgroundImage: "url('/assets/images/PHOTO-2024-07-22-19-12-43.jpg')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </Col>
                    <Col>
                        <div style={{width: '100%', height: '100%', backgroundImage: "url('/assets/images/PHOTO-2024-07-22-19-16-24-2.jpg')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </Col>
                </Row> */}
                <Row style={{height: '100%'}}>
                    <Col className="my-4" style={{height: '100%'}}>
                        <div style={{width: '100%', height: '100%', borderRadius: '20px', overflow: 'hidden', backgroundImage: "url('/assets/images/PHOTO-2024-07-22-19-12-43.jpg')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </Col>
                    <Col style={{height: '100%'}}>
                        <Row className="align-items-center" style={{height: '100%', textAlign: 'center', padding: '40px'}}>
                            <Col>
                                <Row className="mt-2">
                                    <Col xs={12} sm={12} md={6}>
                                        <div className="outline-box">
                                            <h4>CREATING</h4>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} className="d-md-block d-none">
                                        <div className="outline-box">
                                            <h4>HAPPY</h4>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col xs={12} sm={12} md={6} className="d-md-block d-none">
                                        <div className="outline-box">
                                            <h4>PEOPLE</h4>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <div>
                                            <b><h1 className="large-bold-text">THROUGH</h1></b>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        <div className="outline-box">
                                            <h4>FOOD</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* <Row style={{height: '40%', paddingBottom: '10px'}}>
                    <Col style={{height: '100%'}}>
                        <div style={{width: '100%', height: '100%', backgroundImage: "url('/assets/images/PHOTO-2024-07-22-19-12-43.jpg')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </Col>
                    <Col>
                        <div style={{width: '100%', height: '100%', backgroundImage: "url('/assets/images/PHOTO-2024-07-22-19-16-24-2.jpg')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </Col>
                    <Col>
                        <div style={{width: '100%', height: '100%', backgroundImage: "url('/assets/images/PHOTO-2024-07-22-19-16-24.jpg')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    </section>
}

export default Banner2Section

