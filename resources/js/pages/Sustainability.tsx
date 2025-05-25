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


const SustainabilityPage: React.FC = () => {
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

    return <div className="products-section">
        {/* <ProductHeader /> */}
        <Container className="products-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row>
                <Col>
                    <h2>Sustainability at MAKUFOODS</h2>
                    <p>
                    At MAKUFOODS, sustainability is at the heart of everything we do. We believe that our responsibility extends beyond providing nutritious and convenient food products; it also encompasses caring for the environment, supporting local communities, and ensuring a sustainable future for generations to come. Our commitment to sustainability is reflected in our practices and initiatives aimed at promoting environmental stewardship, social responsibility, and economic viability.
                    </p>
                    <h4>Environmental Stewardship</h4>
                    <p>
                        <b>1. Sustainable Sourcing</b> We source our raw materials from local farmers who practice sustainable agriculture. By supporting these farmers, we ensure that our ingredients are fresh, natural, and produced in an environmentally responsible manner.
                    </p>
                    <p>
                        <b>2. Waste Reduction</b> Our production processes are designed to minimize waste. We utilize every part of the raw materials we process, ensuring that nothing goes to waste. By-products are repurposed or composted, contributing to a circular economy.
                    </p>
                    <p>
                        <b>3. Eco-friendly Packaging</b> MAKUFOODS is committed to reducing plastic waste. We use eco-friendly packaging materials that are recyclable and biodegradable, ensuring that our products have a minimal impact on the environment.
                    </p>
                    <p>
                        <b>4. Energy Efficiency</b> Our processing facilities are equipped with energy-efficient technologies to reduce our carbon footprint. We continuously seek ways to improve our energy consumption and invest in renewable energy sources where possible.
                    </p>
                    <h4>Social Responsibility</h4>
                    <p>
                        <b>1. Outgrower Farming System</b> We work closely with local farmers through our outgrower farming system. This partnership not only provides us with high-quality raw materials but also supports the livelihoods of farmers and their families, promoting economic development in rural areas.
                    </p>
                    <p>
                        <b>2. Training and Empowerment</b> MAKUFOODS is dedicated to empowering young women through training programs in food entrepreneurship. By equipping them with the skills and knowledge needed to succeed in the food industry, we help create opportunities for sustainable livelihoods and economic independence.
                    </p>
                    <p>
                        <b>3. Community Engagement</b> We actively engage with the communities where we operate, supporting local schools, healthcare facilities, and community projects. Our goal is to contribute to the well-being and development of these communities.
                    </p>
                    <h4>Economic Viability</h4>
                    <p>
                        <b>1. Affordable Nutrition</b> We strive to make nutritious food accessible and affordable for everyone. Our products are priced competitively to ensure that all segments of the population, particularly women and students, can benefit from healthy and convenient food options.
                    </p>
                    <p>
                        <b>2. Job Creation</b> By establishing a robust food processing business, we create jobs and stimulate local economies. Our operations provide employment opportunities in farming, processing, packaging, and distribution, contributing to economic growth and stability.
                    </p>
                    <p>
                        <b>3. Innovation and Quality</b> Innovation is a core value at MAKUFOODS. We continuously invest in research and development to improve our products and processes. By maintaining high standards of quality and innovation, we ensure the long-term sustainability of our business and the satisfaction of our customers.
                    </p>
                    <h4>Our Commitment</h4>
                    <p>
                    MAKUFOODS is committed to being a responsible corporate citizen. Our sustainability initiatives are designed to create a positive impact on the environment, society, and the economy. We believe that by working together with our stakeholders, we can build a sustainable future for all.
                    </p>
                    <p>
                        <b>
                        Join us on our journey towards sustainability and enjoy nutritious, delicious, and responsibly-produced food with MAKUFOODS.
                        </b>
                    </p>
                </Col>
            </Row>
        </Container>
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('sustainability')){
    createRoot(document.getElementById('sustainability')!).render(<SustainabilityPage />)
}