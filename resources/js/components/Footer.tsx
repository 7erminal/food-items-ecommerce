import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const Footer: React.FC = () => {
    return <section className="footer-section">
        <Container>
            <Row>
                <Col>
                    <Stack gap={1}>
                        <div className="p-2"><img src="/assets/images/makuFoodsLogo.png" className="footer-logo" /></div>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={1}>
                        <div className="p-2"><b>Maku Foods Products</b></div>
                        <div className="p-2"><a href="#" className="footer-link">All Products</a></div>
                        <div className="p-2"><a href="#" className="footer-link">Recipes</a></div>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={1}>
                        <div className="p-2"><b>Our Company</b></div>
                        <div className="p-2"><a href="#" className="footer-link">Who We Are</a></div>
                        <div className="p-2"><a href="#" className="footer-link">Sustainability</a></div>
                    </Stack>
                </Col>
                <Col>
                    <Stack gap={1}>
                        <div className="p-2"><b>Get In Touch</b></div>
                        <div className="p-2"><a href="#" className="footer-link">Contact Us</a></div>
                    </Stack>
                </Col>
                <Col>
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