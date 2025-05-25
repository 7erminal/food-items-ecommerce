import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client'
import Footer from "../components/Footer";
import ProductHeader from "../components/ProductHeader";
import ProductCategories from "../components/ProductCategories";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import Api from "../utils/apis";
import { VALUES } from "../utils/values"
import Items from "../components/Items";

var hosturl = VALUES.itemsBaseApiEndpoint;


const AboutUsPage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [items, setItems] = useState<Array<Item>>()
    const [categoryFilter, setCategoryFilter] = useState("all")

    useEffect(()=>{
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);
        getItems();
        const selCat = new Functions().getSelectedCategory()
        console.log("Selected category is "+selCat)
        selCat == "" ? setCategoryFilter("all") : setCategoryFilter(selCat)
    },[])

    const updateCart = (item: Item, number_: number, action: string) =>{
        const x = new Functions().updateCart(item,number_,action);

        setCartItemCount(x);
    }

    const getItems = ()=>{
        new Api().GET_(`${hosturl}/v1/items`).then(response=>{
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

    const toggleCategoryFilter = (categoryName: string) =>{
        setCategoryFilter(categoryName)
    }


    return <div className="products-section">
        <div id="container">
        <div className="slanted">
            
        </div>
        {/* <ProductHeader /> */}
        <Container className="products-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="roww">
                <Col className="coll">
                    <h2>Who We Are</h2>
                    <p>
                    MAKUFOODS was established in 2019 with the mission of creating happy people by making nutritious food simple and available for everyone by processing fresh farm produce into ready to use and ready to eat forms. Thus perishable farm products are processed by creating unique products in their fresh form, by drying in a controlled environment or cooked for convenience foods.
                    </p>
                    <p>
                    We are driven by the following core values
                    <br/>
                    Innovation & Diversity, Quality, Customer Service, Integrity, Food Security
                    </p>
                    <p>
                    We provide healthy, natural, nutritious, time saving cooking alternatives, affordable foods and convenience foods to our target markets who are mainly women and students.
                    </p>
                    <p>
                    Our business model includes outgrower farming system, drying services, processing and packaging of food products and training of young women into food entrepreneurship
                    </p>
                </Col>
            </Row>
        </Container>
        </div>
        <Container className="my-4 mission-vision-boxes">
            <Row>
                <Col className="my-1">
                    <div className="mission-vision-box">
                        <h5>Spicy</h5>
                    </div>
                </Col>
                <Col className="my-1">
                    <div className="mission-vision-box">
                        <h5>Tasty</h5>
                    </div>
                </Col>
                <Col className="my-1">
                    <div className="mission-vision-box">
                        <h5>Healthy</h5>
                    </div>
                </Col>
                <Col className="my-1">
                    <div className="mission-vision-box">
                        <h5>Delicious</h5>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="contact-info">
            <Container>
                <Row style={{justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Col>
                        <h1>Contact Us</h1>
                        <h5>Contact Numbers</h5>
                        <p className="contact-numbers"><a href="tel:+233501231858">+233501231858</a><br/><a href="tel:+233243270774">+233243270774</a></p>
                    </Col>
                </Row>
                <Row className="mt-4" style={{justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Col>
                        <h5>Or send us an email</h5>
                        <p className="contact-numbers"><a href="mailto:infor@makufoodsltd.com">infor@makufoodsltd.com</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('aboutUsPage')){
    createRoot(document.getElementById('aboutUsPage')!).render(<AboutUsPage />)
}