import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useWindowSize } from "@uidotdev/usehooks";

const ProductHeader: React.FC = () => {
    const size = useWindowSize();

    return <section className="product-header-div">
        <Container fluid style={{height: '100%', position: 'relative'}}>
            <Row className="no-gutters" style={{height: '100%', position: 'relative'}}>
                <Col xs={{ order: 'last', span: 12 }} sm={{ order: 'last', span: 12 }} md={{ order: 'first', span: 6 }} style={{height: '100%'}}>
                    <Row className={size.width! < 481 ? "product-header-content mt-4" : "align-items-center product-header-content"}>
                        <div>
                            <h1 className="header-title-text-2">FIND YOUR NEXT SPICE AND GET ₵1 OFF</h1>
                            <p className="header-body-text">
                            We’ll give you ₵1 off any Kori condiment!
                            </p>      
                            <p className="mt-4">
                                <Button className="header-button"><b>Learn More</b></Button>
                            </p>  
                        </div>
                    </Row>
                </Col>
                <Col xs={{ order: 'first', span: 12 }} sm={{ order: 'first', span: 12 }} md={{ order: 'last', span: 6 }} className="px-0">
                    { size.width! < 481 ? <div className="video-div" style={{ backgroundImage: `url('/assets/images/PHOTO-2023-11-23-12-05-58.jpg')`, backgroundPosition: 'center', backgroundSize: 'center', height: '350px', width: '100%' }}></div> :
                    <div className="video-div" style={{ backgroundImage: `url('/assets/images/PHOTO-2023-11-23-12-05-58.jpg')`, backgroundPosition: 'center', backgroundSize: 'center' }}></div>}
                        
                        {/* <div className="header-video-shadow"></div> */}           
                </Col>
            </Row>
        </Container>
    </section>
}

export default ProductHeader