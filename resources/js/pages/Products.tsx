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
    const [categoryFilter, setCategoryFilter] = useState("all")

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

    const getItemDisplayImage = (itemId: string) => {
        new Api().GET_('/v1/item-images/'+itemId).then(response=>{
            console.log("Response received for images is ");
            console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    if(response.data.ItemImages.length >= 1){
                        return response.data.ItemImages[Math.floor(Math.random() * response.data.ItemImages.length)].ImagePath
                    } else if (response.data.ItemImages.length == 1){
                        return ""
                    }
                    
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
            return ""
        })

        return ""
    }

    const toggleCategoryFilter = (categoryName: string) =>{
        setCategoryFilter(categoryName)
    }


    return <div className="products-section">
        <ProductHeader />
        <ProductCategories toggleCategoryFilter={toggleCategoryFilter}/>
        <Container className="products-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="no-gutters">
                {
                    items != null || items != undefined ?
                        items.length > 0 ?
                        items.filter((it: Item)=>it.Category.CategoryName==categoryFilter || categoryFilter == "all").map((it: Item, i: number)=>{
                            const imageurl = getItemDisplayImage(it.ItemId.toString())
                            console.log("IMAGE URL RETURNED IS ")
                            console.log(imageurl)
                            return <Col key={i} className="justify-content-center d-flex px-0 mt-4" xs={6} sm={6} md={3}>
                                        <Item itemDetails={it} updateCart={updateCart} imageUrl={it.ImagePath} />
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