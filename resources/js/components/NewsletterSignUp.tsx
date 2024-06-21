import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Api from "../utils/apis";
import { VALUES } from "../utils/values"

var hosturl = VALUES.customersBaseApiEndpoint;

const NewsletterSignUp: React.FC = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const addToNewsLetter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const params = {
            'FirstName': firstName,
            'LastName': lastName,
            'Email': email
        }

        setLoading(true)
        new Api().POST_(params, `${hosturl}/v1/newsletter`).then(response=>{
            setLoading(false)

            console.log("Add to newsletter Response received is ");
            console.log(response);
            if(response.status==201){
                if(response.data.StatusCode == 200){
                    // I am using temp items 2 but for some reason I need to add the tempItems for it to behave right
                    console.log("Response is ")
                    console.log(response.data)
                    setLastName('')
                    setFirstName('')
                    setEmail('')
                    
                } else {
                    console.log("ERROR");
                }
            } else {
                console.log("ERROR");
            }
        }).catch(error => {
            setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    return <section className="newsletter-section">
        <Container>
            <Row style={{textAlign: 'center'}}>
                <Col xs={12} sm={12} md={6} xl={6}><h1 className="c-title">STAY IN THE LOOP!</h1></Col></Row>
            <Row style={{textAlign: 'center'}}><Col xs={12} sm={12} md={6} xl={6}><h5 className="c-sub-title">Sign up to be the first to know about special offers, delicious seasonal recipes, new products, and more.</h5></Col></Row>
            <Row>
                <Col xs={{ order: 'last', span: '12' }} sm={{ order: 'last', span: '12' }} md={{ order: 'first', span: '6' }}>
                    <Row className="mt-4">
                        {
                            loading == false ? <Form className="mt-4" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>addToNewsLetter(e)}>
                            <Row className="my-4">
                                <Col>
                                    <Form.Label><b>First Name</b></Form.Label>
                                    <Form.Control value={firstName} size="lg" placeholder="First name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFirstName(e.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control size="lg" value={lastName} placeholder="Last name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setLastName(e.target.value)} />
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control size="lg" placeholder="Email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} required/>
                                </Col>
                            </Row>
                            <Row className="my-2">
                                <Col>
                                    <Form.Check // prettier-ignore
                                        type='checkbox'
                                        id={`default-checkbox`}
                                        label="By entering your name, email address and submitting this form, you consent to receive marketing communication from Maku Foods at the email provided. You can unsubscribe at any time using the “unsubscribe” link at the bottom of the email. View our privacy policy(opens in a new window)."
                                    />
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col>
                                    <Button variant="danger" type="submit" size="lg">Submit</Button>
                                </Col>
                            </Row>
                        </Form> : <Col style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>ADDING CUSTOMER TO NEWSLETTER</Col>
                        }
                    </Row>
                </Col>
                <Col className="my-auto" xs={{ order: 'first', span: '12' }} sm={{ order: 'first', span: '12' }} md={{ order: 'last', span: '6' }}>
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