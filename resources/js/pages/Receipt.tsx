import React, { useEffect, useState, useRef } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/Footer";
import { Tab, Button, Card, CardBody, CardTitle, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import CheckoutHeader from "../components/CheckoutHeader";
import { VALUES } from "../utils/values";
import Api from "../utils/apis";
import RiseLoader from "react-spinners/RiseLoader";

var hosturl = VALUES.itemsBaseApiEndpoint;
var transactionhosturl = VALUES.transactionBaseApiEndpoint;
var paymenthosturl = VALUES.paymentBaseApiEndpoint;

const ReceiptPage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [items, setItems] = useState<Array<any>>()
    const [totalCost, setTotalCost] = useState(0)
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [csrfToken, setCsrfToken] = useState('{{ echo csrf_token()}}')
    const [paymentOptionCash, setPaymentOptionCash] = useState(false)
    const [paymentOptionOther, setPaymentOptionOther] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState(1)
    const [transaction, setTransaction] = useState<Transaction>()
    const [validated, setValidated] = useState(false)

    let formRef = useRef<any>(null)

    useEffect(()=>{
        processReceipt();
    },[cartItemCount])


    const processReceipt = ()=>{
        // setTotalCost(0)
        if(sessionStorage.getItem("invoice_et0i12")!=null){
            var items_ = JSON.parse(sessionStorage.getItem("invoice_et0i12")!);

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


    return <div className="cart-section">
        <div className="cart-header-div">
            <Container fluid style={{height: '100%', position: 'relative'}}>
                <Row className="no-gutters" style={{height: '100%', position: 'relative'}}>
                    <Col>
                        <span className="cart-title">INVOICE</span>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container className="cart-items-list">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="no-gutters justify-content-center">
                <Col className="justify-content-center d-flex px-0 mt-4" xs={11} sm={11} md={10}>
                    <div className="cart-items-card">
                        <Card>
                            <CardBody>
                                <CardTitle>Invoice</CardTitle>
                                <ListGroup variant="flush">
                                    {
                                        items?.map((it: Item, i: number)=>{
                                            console.log("Cart image path is ... "+hosturl+it.ImagePath)
                                            // console.log("ITem is ")
                                            // console.log(it)
                                            return <ListGroup.Item key={i}>
                                                    <Container>
                                                        <Row className="my-2">
                                                            <Col>
                                                                <Row>
                                                                    <Col style={{ display: 'flex', justifyContent: 'left', flexDirection: 'row' }}>
                                                                        <span>{ it[0].ItemName } <b>X { it[1] }</b></span>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col style={{ textAlign: 'right'}}>
                                                                <span>{ it[0].ItemPrice.Currency.Symbol == "" ? "₵" : it[0].ItemPrice.Currency.Symbol }{ it[0].ItemPrice.ItemPrice * it[1] }</span>
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
                                                    <h5><b>Total</b></h5>
                                                </Col>
                                                <Col style={{ textAlign: 'right'}}>
                                                    <h3>₵{ totalCost }</h3>
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
            <Row className="no-gutters justify-content-center mb-4">
                <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                     <a href="/">Continue Shopping</a>
                </Col>
            </Row>
        </Container>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('invoice')){
    createRoot(document.getElementById('invoice')!).render(<ReceiptPage />)
}