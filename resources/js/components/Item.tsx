import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

type Props = {
    imageUrl: string
}

const Item: React.FC<Props> = ({imageUrl}) => {
    return <Form><div className="item">
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