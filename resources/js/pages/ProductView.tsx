import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import Functions from './../utils/functions'
import CartButton from "../components/CartButton";
import Api from "../utils/apis";

const ProductViewPage: React.FC = () => {
    const [quantity, setQuantity] = useState(1)
    const [cartItemCount, setCartItemCount] = useState(0)
    const [itemId, setItemId] = useState('')
    const [itemDetails, setItemDetails] = useState<Item>()

    useEffect(()=>{
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);

        console.log("Item ID is "+(document.getElementById("item_id_view") as HTMLInputElement).value);
        setItemId((document.getElementById("item_id_view") as HTMLInputElement).value)
    },[])

    useEffect(()=>{
        getItemDetails()
        getItemImages()
        getItemQuantity()
    },[itemId])

    const addToCart = (item: Item, number_: number, action: string)=>{
        console.log("add to cart "+sessionStorage.getItem("cart_et0i12"));
        const x = new Functions().updateCart(item,number_,action);

        setCartItemCount(x);
    }

    const getItemDetails = () => {
        new Api().GET_('/v1/items/'+itemId).then(response=>{
            console.log("Response received is ");
            console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    setItemDetails(response.data.Item);
                } else {
                    console.log("ERROR");
                }
            } else {
                console.log("ERROR");
            }
        }).catch(error => {
            // setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const getItemImages = () => {
        new Api().GET_('/v1/item-images/'+itemId).then(response=>{
            console.log("Response received for images is ");
            console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    setItemDetails(response.data.Item);
                } else {
                    console.log("ERROR");
                }
            } else {
                console.log("ERROR");
            }
        }).catch(error => {
            // setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const getItemQuantity = () => {
        console.log("about to go get quantity with "+itemId)
        new Api().GET_('/v1/items/quantity/'+itemId).then(response=>{
            console.log("Response received for Quantity is ");
            console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    setQuantity(response.data.Quantity.Quantity);
                } else {
                    console.log("ERROR");
                }
            } else {
                console.log("ERROR");
            }
        }).catch(error => {
            // setLoading(false)
            console.log("Error returned is ... ")
            console.log(error)
        })
    }
    

    return <div className="products-section">
        <Container className="item-details-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="item-details-header">
                <Col className="mx-auto" style={{ textAlign: 'center' }}><h4>Kori</h4></Col>
            </Row>
            <Row>
                <Col className="justify-content-center mt-4" xs={12} sm={12} md={7}>
                    <img src="/assets/images/PHOTO-2023-11-23-12-04-55-2.jpg" width="95%"  />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={12} sm={12} md={5}>
                    <Container fluid>
                    <Row>
                        <Col><h1>{ itemDetails?.ItemName }</h1></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col><h2>{ itemDetails?.ItemPrice.Currency.Symbol }{ itemDetails?.ItemPrice.ItemPrice }</h2></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>{ quantity != 0 ? 'In stock' : 'out of stock' }</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>Quantity: <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setQuantity(Number(e.target.value))} type="number" defaultValue={itemDetails?.Quantity} /></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col><Button variant="secondary" onClick={()=>addToCart(itemDetails!,quantity,"add")}>Add To Bag</Button></Col>
                    </Row>
                    <Row className="mt-4">
                        <Col><h3>Product Details</h3></Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>Weight: 0.25 kg</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col><small>{ itemDetails?.Description }</small></Col>
                    </Row>
                    <Row className="mt-4">
                        <Col><small><b>Share this product with your friends</b></small></Col>
                    </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('product-view')){
    createRoot(document.getElementById('product-view')!).render(<ProductViewPage />)
}