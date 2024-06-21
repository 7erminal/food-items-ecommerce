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

const CheckoutPage: React.FC = () => {
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
    const [proceed, setProceed] = useState(false)

    let formRef = useRef<any>(null)

    useEffect(()=>{
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);

        setCartItems();
    },[cartItemCount])

    useEffect(()=>{
        if(sessionStorage.getItem("transaction")!=null){
            console.log("Transaction saved is ")
            console.log(sessionStorage.getItem("transaction")!)
            setTransaction(JSON.parse(sessionStorage.getItem("transaction")!))
        } else {
            console.log("Sorry an error occurred")
        }
    },[])

    useEffect(()=>{
        if(proceed==true){
            formRef!.current.submit()
        }
    },[proceed])


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
        confirmOrder();
    }

    const confirmOrder = ()=>{
        setShowError(false)
        setErrorMessage("")

        var params = {
            "TransactionId": transaction?.TransactionId.toString(),
            "Status": "1",
            "ConfirmedBy": "1"
        }

        setLoading(true)
        new Api().POST_(params, `${transactionhosturl}/v1/orders/confirm-order`).then(response=>{
            setLoading(false)
            console.log("Response received is ");
            console.log(response);
            if(response.status==201){
                if(response.data.StatusCode == 200){
                    updateTransaction()
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

    const paymentOption = (e: React.ChangeEvent<HTMLInputElement>, option: string)=>{
        console.log("Check value is "+e.target.checked);

        if(option=="CASH"){
            setPaymentOptionOther(false)
            setPaymentOptionCash(e.target.checked)
            setPaymentMethod(1)
        } else if (option=="OTHER"){
            setPaymentOptionCash(false)
            setPaymentOptionOther(e.target.checked)
        }
    }

    const otherPaymentMethods = (method: string)=>{
        if(method=="MOBILE_MONEY"){
            setPaymentMethod(2)
        }
        if(method=="MASTERCARD"){
            setPaymentMethod(3)
        }

        if(method=="VISA_CARD"){
            setPaymentMethod(4)
        }
    }

    const updateTransaction = ()=>{
        var totalCost_ = 0

        items?.map((it: any, i: number)=>{
            totalCost_ = totalCost_ + it[0].ItemPrice.ItemPrice
        })

        var params = {
            "SenderAccountNumber": "",
            "RecipientAccountNumber": "",
        }

        setLoading(true)
        new Api().PUT_(params, `${transactionhosturl}/v1/transactions/${transaction?.TransactionId.toString()}`).then(response=>{
            setLoading(false)
            console.log("Response received is ");
            console.log(response);
            if(response.status==201){
                if(response.data.StatusCode == 200){
                    paymentProcess()
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

    const paymentProcess = ()=>{
        var totalCost_ = 0

        items?.map((it: any, i: number)=>{
            totalCost_ = totalCost_ + it[0].ItemPrice.ItemPrice
        })

        var params = {
            "TransactionId": transaction?.TransactionId,
            "PaymentMethod": paymentMethod,
            "InitiatedBy": 1,
            "Amount": totalCost_,
            "Service": 1,
            "Sender": 1,
            "Reciever": 1,
        }

        setLoading(true)
        new Api().POST_(params, `${paymenthosturl}/v1/payments`).then(response=>{
            setLoading(false)
            console.log("Response received is ");
            console.log(response);
            if(response.status==201){
                if(response.data.StatusCode == 200){
                    console.log("Payment initiated")
                    sessionStorage.setItem("invoice_et0i12", JSON.stringify(items))
                    sessionStorage.removeItem("cart_et0i12")
                    sessionStorage.removeItem("transaction")
                    setProceed(true)
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
        <CheckoutHeader />
        <Container className="cart-items-list">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="no-gutters justify-content-center">
                <Col className="justify-content-center d-flex px-0 mt-4" xs={11} sm={11} md={10}>
                    <div className="cart-items-card">
                        <Card>
                        { loading== false ? <CardBody>
                                <CardTitle>Checkout</CardTitle>
                                {
                                    showError == false ? '' :
                                    <span>{ errorMessage }</span>
                                }
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
                                                                        <h5><b>{ it[1] }</b> { it[0].ItemName }</h5>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col style={{ textAlign: 'right'}}>
                                                                <h5>{ it[0].ItemPrice.Currency.Symbol == "" ? "₵" : it[0].ItemPrice.Currency.Symbol }{ it[0].ItemPrice.ItemPrice * it[1] }</h5>
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
                                <hr /> 
                                <Container>
                                    <Row className="my-2">
                                        <Col>
                                            <h3>Payment Method</h3>
                                            <Row>
                                                <Col xs={12} sm={11} md={6}>
                                                    <Form>
                                                        <Form.Group as={Row} className="mb-3" controlId="name">
                                                            <Form.Label column sm="4">
                                                            Your Name
                                                            </Form.Label>
                                                            <Col sm="8">
                                                            <Form.Control type="text" placeholder="Name" required />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="address">
                                                            <Form.Label column sm="4">
                                                            Address
                                                            </Form.Label>
                                                            <Col sm="8">
                                                            <Form.Control type="text" placeholder="Address" required />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="Cash"
                                                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>paymentOption(e, "CASH")}
                                                            checked={paymentOptionCash}
                                                        />
                                                        <Form.Check // prettier-ignore
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="Other"
                                                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>paymentOption(e, "OTHER")}
                                                            checked={paymentOptionOther}
                                                        />
                                                        {
                                                            paymentOptionOther == true ?
                                                            <Tab.Container id="list-group-tabs-example my-4" defaultActiveKey="#link1">
                                                                <Row className="mt-4">
                                                                    <Col sm={4}>
                                                                        <ListGroup>
                                                                            <ListGroup.Item action href="#link1" onClick={()=>otherPaymentMethods("MOBILE_MONEY")}>
                                                                            Mobile Money
                                                                            </ListGroup.Item>
                                                                            <ListGroup.Item action href="#link2" onClick={()=>otherPaymentMethods("MASTERCARD")}>
                                                                            Mastercard
                                                                            </ListGroup.Item>
                                                                            <ListGroup.Item action href="#link3" onClick={()=>otherPaymentMethods("VISA_CARD")}>
                                                                            Visa Card
                                                                            </ListGroup.Item>
                                                                        </ListGroup>
                                                                    </Col>
                                                                </Row>
                                                            </Tab.Container> : ''
                                                        }
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardBody> : <div style={{paddingTop: '100px', paddingBottom: '110px'}}><RiseLoader color="#EB0E0E" /></div>
                    }
                        </Card>
                    </div> 
                </Col>
            </Row>
            <Row className="no-gutters justify-content-center mb-4">
                <Col style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                    { loading== false ? <Form ref={formRef} action="/invoice" method="GET">
                        <input type="hidden" value={csrfToken} name="_token" />
                        <Button type="button" variant="outline-success" onClick={submitForm}>Confirm</Button>
                        </Form> 
                        : '' 
                    }
                </Col>
            </Row>
        </Container>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('checkout')){
    createRoot(document.getElementById('checkout')!).render(<CheckoutPage />)
}