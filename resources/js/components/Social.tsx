import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tweet } from "react-tweet";

const Social: React.FC = () => {
    return <section className="social-section">
        <Container className="my-4">
            <Row className="my-2">
                <Col>
                    <h1 style={{color: "white"}}>Social</h1>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col md={3} sm={6} xs={12}>
                    <div data-theme="dark">
                        <Tweet id="1765203202343915530" />
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div data-theme="dark">
                        <Tweet id="1763248816718057846" />
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div data-theme="dark">
                        <Tweet id="1763106772502605963" />
                    </div>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <div data-theme="dark">
                        <Tweet id="1765772401357324465" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Social