import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const NewsletterSignUp: React.FC = () => {
    return <section className="newsletter-section">
        <Container>
            <Row>
                <Col>
                    <Row style={{textAlign: 'center'}}><h1 className="c-title">STAY IN THE LOOP!</h1></Row>
                    <Row style={{textAlign: 'center'}}><h5 className="c-sub-title">Sign up to be the first to know about special offers, delicious seasonal recipes, new products, and more.</h5></Row>
                    <Row className="mt-4">
                        <Form className="mt-4">
                            <Row className="my-4">
                                <Col>
                                    <Form.Label><b>First Name</b></Form.Label>
                                    <Form.Control size="lg" placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control size="lg" placeholder="Last name" />
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control size="lg" placeholder="Email" />
                                </Col>
                            </Row>
                            <Row className="my-2">
                                <Form.Check // prettier-ignore
                                    type='checkbox'
                                    id={`default-checkbox`}
                                    label="By entering your name, email address and submitting this form, you consent to receive marketing communication from Kraft Heinz at the email provided. You can unsubscribe at any time using the “unsubscribe” link at the bottom of the email. View our privacy policy(opens in a new window)."
                                />
                            </Row>
                        </Form>
                    </Row>
                </Col>
                <Col className="my-auto">
                    <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center' }} className="my-auto">
                        <Col className="my-auto">
                            <img src="/assets/images/Kori.jpeg" width="100%" style={{ borderRadius: '10px' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
}

export default NewsletterSignUp