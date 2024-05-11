import React, { useEffect, useState, useRef } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/Footer";
import ProductCategories from "../components/ProductCategories";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import Item from "../components/Item";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import CartHeader from "../components/CartHeader";
import { VALUES } from "../utils/values";

var hosturl = VALUES.itemsBaseApiEndpoint;

const CartPage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [items, setItems] = useState<Array<any>>()
    const [totalCost, setTotalCost] = useState(0)
    const [csrfToken, setCsrfToken] = useState('{{ echo csrf_token()}}')

    let myRef = useRef<any>(null)

    useEffect(()=>{
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);

        setCartItems();
    },[cartItemCount])

    const updateCart = (item: Item, number_: number, action: string) =>{
        const x = new Functions().updateCart(item,number_,action);

        setCartItemCount(x);
    }

    const setCartItems = ()=>{
        // setTotalCost(0)
        if(sessionStorage.getItem("cart_et0i12")!=null){
            var items_ = JSON.parse(sessionStorage.getItem("cart_et0i12")!);

            console.log("Items in cart are ")
            console.log(items_)

            let tempTotalCost = 0;

            items_?.map((it: Item, i: number)=>{
                tempTotalCost = tempTotalCost + it[0].ItemPrice.ItemPrice
            })

            setTotalCost(tempTotalCost)

            setItems(items_)
        } else {
            setItems([])
        }
    }

    const submitForm = () =>{
        myRef!.current.submit()
    }


    return <div className="cart-section">
        <CartHeader />
        <Container className="cart-items-list">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="no-gutters justify-content-center">
                <Col className="justify-content-center d-flex px-0 mt-4" xs={11} sm={11} md={10}>
                    <div className="cart-items-card">
                        <Card>
                            <CardBody>
                                <CardTitle>Cart Items</CardTitle>
                                <ListGroup variant="flush">
                                    {
                                        items?.map((it: Item, i: number)=>{
                                            console.log("Cart image path is ... "+hosturl+it.ImagePath)
                                            return <ListGroup.Item key={i}>
                                                    <Container>
                                                        <Row>
                                                            <Col>
                                                                <Form ref={myRef} method="GET" action="/view-product" >
                                                                    <div className="cart-item-pic" onClick={submitForm} style={{backgroundImage: `url('${hosturl}${it[0].ImagePath}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                                                                    <input type="hidden" value={ it[0].ItemId } name="item_id" />
                                                                    <input type="hidden" value={csrfToken} name="_token" />
                                                                </Form>
                                                            </Col>
                                                            <Col>
                                                                <h3>{ it[0].ItemName }</h3>
                                                            </Col>
                                                            <Col style={{ textAlign: 'right'}}>
                                                                <h3>{ it[0].ItemPrice.Currency.Symbol }{ it[0].ItemPrice.ItemPrice }</h3>
                                                            </Col>
                                                        </Row>  
                                                        <Row>
                                                            <Col>
                                                                <h6>{ it[1] }</h6>
                                                            </Col>
                                                            <Col style={{ textAlign: 'right'}}>
                                                                <Button variant="outline-danger" size="sm" onClick={()=>updateCart(it[0],0,"minus")} >Remove Item</Button>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                    
                                                </ListGroup.Item>
                                        })
                                    }
                                    <ListGroup.Item>
                                        <Container> 
                                            <Row>
                                                <Col>
                                                    <h5>Total</h5>
                                                </Col>
                                                <Col style={{ textAlign: 'right'}}>
                                                    <h1>₵{ totalCost }</h1>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('cart')){
    createRoot(document.getElementById('cart')!).render(<CartPage />)
}