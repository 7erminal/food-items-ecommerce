import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const Footer: React.FC = () => {
    return <section className="footer-section">
        <Container>
            <Row>
                <Col xs={12} md={3} className="mt-1">
                    <Stack gap={1}>
                        <div className="p-2"><img src="/assets/images/makuFoodsLogo.png" className="footer-logo" /></div>
                    </Stack>
                </Col>
                <Col xs={12} md={3} className="mt-1">
                    <Stack gap={1}>
                        <div className="p-2"><b>Maku Foods Products</b></div>
                        <div className="p-2"><a href="/products" className="footer-link">All Products</a></div>
                        <div className="p-2"><a href="/recipes" className="footer-link">Recipes</a></div>
                    </Stack>
                </Col>
                <Col xs={12} md={3} className="mt-1">
                    <Stack gap={1}>
                        <div className="p-2"><b>Our Company</b></div>
                        <div className="p-2"><a href="/about-us" className="footer-link">Who We Are</a></div>
                        <div className="p-2"><a href="/sustainability" className="footer-link">Sustainability</a></div>
                    </Stack>
                </Col>
                <Col xs={12} md={3} className="mt-1">
                    <Stack gap={1}>
                        <div className="p-2"><b>Get In Touch</b></div>
                        <div className="p-2"><a href="/about-us" className="footer-link">Contact Us</a></div>
                        <div className="p-2"><a href="tel:+233501231858">+233501231858</a></div>
                        <div className="p-1"><a href="tel:+233243270774">+233243270774</a></div>
                        <div className="p-2"><a href="mailto:infor@makufoodsltd.com">infor@makufoodsltd.com</a></div>
                    </Stack>
                </Col>
            </Row>
            <hr/>
            <Row className="my-4">
                <Col>Copyright 2024</Col>
            </Row>
        </Container>
    </section>
}

export default Footer