import React from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/footer";
import { Button, Col, Container, Row } from "react-bootstrap";

const ProductViewPage: React.FC = () => {
    return <div className="products-section">
        <Container className="item-details-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="item-details-header">
                <Col className="mx-auto" style={{ textAlign: 'center' }}><h4>Kori</h4></Col>
            </Row>
            <Row>
                <Col className="justify-content-center mt-4" xs={12} sm={12} md={7}>
                    <img src="/assets/images/PHOTO-2023-11-23-12-04-55-2.jpg" width="95%"  />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={12} sm={12} md={5}>
                    <Container fluid>
                    <Row>
                        <Col><h1>Kelewele spice sauce</h1></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col><h2>₵60.00</h2></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>In stock</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>Quantity: <input type="number" defaultValue="1" /></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col><Button variant="secondary">Add To Bag</Button></Col>
                    </Row>
                    <Row className="mt-4">
                        <Col><h3>Product Details</h3></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>Weight: 0.25 kg</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col><small>Get the flavour full of Chinese taste in your sauces, Friedrice, fried noodles, stir fry, sautee with the Chinese five spice mix. Made from roasted organic spices</small></Col>
                    </Row>
                    <Row className="mt-4">
                        <Col><small><b>Share this product with your friends</b></small></Col>
                    </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
}

if(document.getElementById('product-view')){
    createRoot(document.getElementById('product-view')!).render(<ProductViewPage />)
}