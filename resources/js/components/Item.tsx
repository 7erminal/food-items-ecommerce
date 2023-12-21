import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

type Props = {
    imageUrl: string
}

const Item: React.FC<Props> = ({imageUrl}) => {
    let myRef = useRef<any>(null)
    const [csrfToken, setCsrfToken] = useState('{{ echo csrf_token()}}')

    const submitForm = () =>{
        myRef!.current.submit()
    }

    return <Form ref={myRef} method="GET" action="/view-product" className="item">
            <input type="hidden" value={csrfToken} name="_token" />
            <input type="hidden" value="23" />
        <div onClick={submitForm} style={{ width: '100%', height: '100%'}}>
        <div className="item-image">
            <div className="item-image-i" style={{backgroundImage: `url('`+imageUrl+`')`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
        </div>
        <div className="item-content">
            <Row>
                <Col>
                    Kelewele spice sauce
                </Col>
                <Col>
                    ₵60
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Button variant="outline-success">Buy Now</Button>
                </Col>
            </Row>
        </div>
    </div></Form>
}

export default Item