import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import Api from './../resources/apis'
import { VALUES } from "../utils/values";

type Props = {
    imageUrl: string
    updateCart: (item: Item, number_: number, action: string)=>void
    itemDetails: Item
}

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
                <div className="item-image-i" onClick={submitForm} style={{backgroundImage: `url('`+VALUES.baseApiEndpoint+imageUrl+`')`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
            </div>
            <div className="item-content">
                <Row>
                    <Col>
                        { itemDetails.ItemName }
                    </Col>
                    <Col>
                        {itemDetails.ItemPrice.Currency.Symbol}{itemDetails.ItemPrice.ItemPrice}
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Button type="button" variant="outline-success" onClick={()=>updateCart(itemDetails!,1,"add")}>Add to cart</Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" onClick={submitForm}>View Details</Button>
                    </Col>
                </Row>
            </div>
        </div>
    </Form>
}

export default Item