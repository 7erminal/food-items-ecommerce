import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Header: React.FC = () => {
    return <section className="header-div">
        <Container fluid style={{height: '100%', position: 'relative'}}>
            <Row className="no-gutters" style={{height: '100%', position: 'relative'}}>
                <Col style={{height: '100%'}}>
                    <Row className="align-items-center" style={{height: '100%', textAlign: 'center', padding: '80px'}}>
                        <div>
                            <h1 className="header-title-text">It has to be Kori</h1>
                            <p className="header-body-text">
                                Is it possible that you're too obsessed? Nah.
                            </p>      
                            <p className="mt-4">
                                <Button className="header-button"><b>Learn More</b></Button>
                            </p>  
                        </div>
                    </Row>
                </Col>
                <Col className="px-0">
                    <div className="video-div">
                        <video autoPlay height="100%" width="100%" className="header-video" controls>
                            <source src="/assets/videos/Skype_Video.mp4" type="video/mp4" />
                        </video>
                        {/* <div className="header-video-shadow"></div> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Header