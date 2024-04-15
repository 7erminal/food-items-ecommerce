import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useWindowSize } from "@uidotdev/usehooks";

const Header: React.FC = () => {
    const size = useWindowSize();

    return <section className="header-div">
        <Container fluid style={{height: '100%', position: 'relative'}}>
            <Row className="no-gutters" style={{height: '100%', position: 'relative'}}>
                <Col xs={{ order: 'last', span: 12 }} sm={{ order: 'last', span: 12 }} md={{ order: 'first', span: 6 }} style={{height: '100%'}}>
                    <Row className={size.width! < 481 ? "header-content" : "align-items-center header-content" } style={{height: '100%', textAlign: 'center', padding: '80px'}}>
                        <div>
                            <h1 className="header-title-text">It has to be Maku foods</h1>
                            <p className="header-body-text">
                                Is it possible that you're too obsessed? Nah.
                            </p>      
                            <p className="mt-4">
                                <Button className="header-button"><b>Learn More</b></Button>
                            </p>  
                        </div>
                    </Row>
                </Col>
                <Col xs={{ order: 'first', span: 12 }} sm={{ order: 'first', span: 12 }} md={{ order: 'last', span: 6 }} className="px-0">
                    <div className="video-div">
                        <video autoPlay height="100%" width="100%" className="header-video" controls>
                            <source src="/assets/videos/VIDEO-2024-04-15-14-00-00.mp4" type="video/mp4" />
                        </video>
                        {/* <div className="header-video-shadow"></div> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Header