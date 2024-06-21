import React, { useEffect, useState, useRef } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/Footer";
import { Button, Card, CardBody, CardTitle, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import CartHeader from "../components/CartHeader";
import { VALUES } from "../utils/values";
import Api from "../utils/apis";
import RiseLoader from "react-spinners/RiseLoader";

var hosturl = VALUES.itemsBaseApiEndpoint;
var transactionhosturl = VALUES.transactionBaseApiEndpoint;

const CartPage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [items, setItems] = useState<Array<any>>()
    const [totalCost, setTotalCost] = useState(0)
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [checkedOut, setCheckedOut] = useState(false)
    const [csrfToken, setCsrfToken] = useState('{{ echo csrf_token()}}')
    const [transaction, setTransaction] = useState<Transaction>()

    let myRef = useRef<any>(null)
    let checkoutRef = useRef<any>(null)

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
                tempTotalCost = tempTotalCost + (it[0].ItemPrice.ItemPrice * it[1])
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

    useEffect(()=>{
        if(checkedOut==true){
            checkoutRef!.current.submit()
        }
    },[checkedOut])

    useEffect(()=>{
        sessionStorage.setItem("transaction", JSON.stringify(transaction))
    },[transaction])

    const checkout = ()=>{
        setShowError(false)
        setErrorMessage("")

        let cart: Array<any> = []
        var totalQuantity_ = 0
        var totalCost_ = 0
        var currency_ = "1"

        items?.map((it: any, i: number)=>{
            console.log("Every item here ")
            console.log(it)
            totalCost_ = totalCost_ + (it[0].ItemPrice.ItemPrice * it[1])
            totalQuantity_ = totalQuantity_ + it[1]
            currency_ = it[0].ItemPrice.Currency.CurrencyId

            console.log("Currency is "+currency_)

            var tempItem = {
                "ItemId": it[0].ItemId,
                "Quantity": it[1],
                "Price": it[0].ItemPrice.ItemPrice,
                "Currency": it[0].ItemPrice.Currency.CurrencyId
            }

            cart.push(tempItem)
        })

        var params = {
            "TotalQuantity": totalQuantity_.toString(),
            "Currency": currency_.toString(),
            "Items": cart,
            "RequestType": "ORDER",
            "Comment": "",
            "Cost": totalCost.toString(),
            "CreatedBy": "1"
        }

        setLoading(true)
        new Api().POST_(params, `${transactionhosturl}/v1/orders`).then(response=>{
            setLoading(false)
            console.log("Response received is ");
            console.log(response);
            if(response.status==201){
                if(response.data.StatusCode == 200){
                    setTransaction(response.data.Transaction)
                    
                    setCheckedOut(true)
                } else {
                    console.log("ERROR");
                    setShowError(true)
                    setErrorMessage("An error occurred when placing your order. Please try again")
                }
            } else {
                console.log("ERROR");
                setShowError(true)
                setErrorMessage("An error occurred when placing your order. Please try again")
            }
        }).catch(error => {
            setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
            setShowError(true)
            setErrorMessage("An error occurred when placing your order. Please try again")
        })
    }


    return <div className="cart-section">
        <CartHeader />
        <Container className="cart-items-list">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="no-gutters justify-content-center">
                <Col className="justify-content-center d-flex px-0 mt-4" xs={11} sm={11} md={10}>
                { loading== false ? <div className="cart-items-card">
                        <Card>
                         <CardBody>
                                <CardTitle>Cart Items</CardTitle>
                                {
                                    showError == false ? '' :
                                    <span style={{color: 'red'}}>{ errorMessage }</span>
                                }
                                <ListGroup variant="flush">
                                    {
                                        items?.map((it: Item, i: number)=>{
                                            console.log("Cart image path is ... "+hosturl+it.ImagePath)
                                            // console.log("ITem is ")
                                            // console.log(it)
                                            return <ListGroup.Item key={i}>
                                                    <Container>
                                                        <Row>
                                                            <Col>
                                                                <Row>
                                                                    <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                                                                        <Form ref={myRef} method="GET" action="/view-product" >
                                                                            <div className="cart-item-pic" onClick={submitForm} style={{backgroundImage: `url('${hosturl}${it[0].ImagePath}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                                                                            <input type="hidden" value={ it[0].ItemId } name="item_id" />
                                                                            <input type="hidden" value={csrfToken} name="_token" />
                                                                        </Form>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="mt-1">
                                                                    <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                                                                        <h6>{ it[1] } { it[1] < 2 ? 'item' : 'items' }</h6>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col>
                                                                <h3>{ it[0].ItemName }</h3>
                                                            </Col>
                                                            <Col style={{ textAlign: 'right'}}>
                                                                <h3>{ it[0].ItemPrice.Currency.Symbol }{ it[0].ItemPrice.ItemPrice * it[1] }</h3>
                                                            </Col>
                                                        </Row>  
                                                        <Row>
                                                            {/* <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                                                                <h6>{ it[1] } { it[1] < 2 ? 'item' : 'items' }</h6>
                                                            </Col> */}
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
                    </div> : <div style={{paddingTop: '100px', paddingBottom: '110px'}}><RiseLoader color="#EB0E0E" /></div>
                }
                </Col>
            </Row>
            <Row className="no-gutters justify-content-center mb-4">
                <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    { loading== false ? <Form ref={checkoutRef} method="GET" action="/checkout">
                    <input type="hidden" value={csrfToken} name="_token" />
                            <Button type="button" variant="outline-success" onClick={checkout}>CHECKOUT</Button>
                        </Form> : '' }
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