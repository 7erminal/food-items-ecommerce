import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const ProductHeader: React.FC = () => {
    return <section className="product-header-div">
        <Container fluid style={{height: '100%', position: 'relative'}}>
            <Row className="no-gutters" style={{height: '100%', position: 'relative'}}>
                <Col style={{height: '100%'}}>
                    <Row className="align-items-center" style={{height: '100%', textAlign: 'center', padding: '80px'}}>
                        <div>
                            <h1 className="header-title-text-2">FIND YOUR NEXT SAUCE AND GET ₵1 OFF</h1>
                            <p className="header-body-text">
                           We’ll give you ₵1 off any Kori condiment!
                            </p>      
                            <p className="mt-4">
                                <Button className="header-button"><b>Learn More</b></Button>
                            </p>  
                        </div>
                    </Row>
                </Col>
                <Col className="px-0">
                    <div className="video-div" style={{ backgroundImage: `url('/assets/images/PHOTO-2023-11-23-12-05-58.jpg')`, backgroundPosition: 'center', backgroundSize: 'center' }}>
                        
                        {/* <div className="header-video-shadow"></div> */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default ProductHeader