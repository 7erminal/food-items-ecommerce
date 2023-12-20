import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const Footer: React.FC = () => {
    return <section className="footer-section">
        <Container>
            <Row>
                <Col xs={12} sm={12} md={3}>
                    <Stack gap={1}>
                        <div className="p-2"><b>Kori Products</b></div>
                        <div className="p-2"><a href="#">All Products</a></div>
                        <div className="p-2">Recipes</div>
                    </Stack>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Stack gap={1}>
                        <div className="p-2"><b>Our Company</b></div>
                        <div className="p-2"><a href="#">Who We Are</a></div>
                        <div className="p-2">Sustainability</div>
                    </Stack>
                </Col>
                <Col xs={12} sm={12} md={3}>
                    <Stack gap={1}>
                        <div className="p-2"><b>Get In Touch</b></div>
                        <div className="p-2"><a href="#">Contact Us</a></div>
                    </Stack>
                </Col>
                <Col xs={12} sm={12} md={3}>
                </Col>
            </Row>
            <hr/>
            <Row className="my-4">
                <Col>Copyright 2023</Col>
            </Row>
        </Container>
    </section>
}

export default Footer