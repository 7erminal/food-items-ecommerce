import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Api from './../resources/apis'
import { VALUES } from "../utils/values";

type Props = {
    imageUrl: string
    updateCart: (item: Item, number_: number, action: string)=>void
    itemDetails: Item
}

var hosturl = VALUES.itemsBaseApiEndpoint;

const Item: React.FC<Props> = ({imageUrl, updateCart, itemDetails}) => {
    let myRef = useRef<any>(null)
    const [csrfToken, setCsrfToken] = useState('{{ echo csrf_token()}}')

    const submitForm = () =>{
        myRef!.current.submit()
    }

    return <Form ref={myRef} method="GET" action="/view-product" className="item">
            <input type="hidden" value={csrfToken} name="_token" />
            <input type="hidden" value={ itemDetails.ItemId } name="item_id" />
        <div style={{ width: '100%', height: '100%'}}>
            <div className="item-image">
                <div className="item-image-i" onClick={submitForm} style={{backgroundImage: `url('`+hosturl+imageUrl+`')`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
            </div>
            <div className="item-content">
                <Row>
                    <Col xs={12} md={6} className="mt-1">
                        { itemDetails.ItemName }
                    </Col>
                    <Col xs={12} md={6} className="mt-1">
                        {itemDetails.ItemPrice.Currency.Symbol}{itemDetails.ItemPrice.ItemPrice}
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col xs={12} md={6} className="mt-1">
                        <Button type="button" style={{width: '100%'}} variant="outline-success" onClick={()=>updateCart(itemDetails!,1,"add")}>Add to cart</Button>
                    </Col>
                    <Col xs={12} md={6} className="mt-1">
                        <Button variant="secondary" style={{width: '100%'}} onClick={submitForm}>View Details</Button>
                    </Col>
                </Row>
            </div>
        </div>
    </Form>
}

export default Item