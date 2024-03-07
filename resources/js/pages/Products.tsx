import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/footer";
import ProductHeader from "../components/ProductHeader";
import ProductCategories from "../components/ProductCategories";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import Api from "../utils/apis";

const ProductsPage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [items, setItems] = useState<Array<Item>>()

    useEffect(()=>{
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);
        getItems();
    },[])

    const updateCart = (item: Item, number_: number, action: string) =>{
        const x = new Functions().updateCart(item,number_,action);

        setCartItemCount(x);
    }

    const getItems = ()=>{
        new Api().GET_('/v1/items').then(response=>{
            console.log("Response received is ");
            console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    setItems(response.data.Items);
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
        <ProductHeader />
        <ProductCategories />
        <Container className="products-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="no-gutters">
                {
                    items != null || items != undefined ?
                        items.length > 0 ?
                        items.map((it: Item, i: number)=>{
                            return <Col key={i} className="justify-content-center d-flex px-0 mt-4" xs={6} sm={6} md={3}>
                                        <Item itemDetails={it} updateCart={updateCart} imageUrl="/assets/images/PHOTO-2023-11-23-12-04-55-2.jpg" />
                                    </Col>
                        })
                        : ''
                    : ''
                }
            </Row>
        </Container>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('products')){
    createRoot(document.getElementById('products')!).render(<ProductsPage />)
}