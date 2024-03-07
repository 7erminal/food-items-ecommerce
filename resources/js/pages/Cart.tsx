import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/footer";
import ProductCategories from "../components/ProductCategories";
import { Button, Card, CardBody, CardTitle, Col, Container, ListGroup, Row } from "react-bootstrap";
import Item from "../components/Item";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import CartHeader from "../components/CartHeader";

const CartPage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [items, setItems] = useState<Array<any>>()

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
        if(sessionStorage.getItem("cart_et0i12")!=null){
            var items_ = JSON.parse(sessionStorage.getItem("cart_et0i12")!);

            console.log("Items in cart are ")
            console.log(items_)

            setItems(items_)
        } else {
            setItems([])
        }
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
                                            return <ListGroup.Item key={i}>
                                                    <Container>
                                                        <Row>
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