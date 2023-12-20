import React from "react";
import { createRoot } from 'react-dom/client'
import Header from "../components/Header";
import ItemsAd from "../components/ItemsAd";
import NewsletterSignUp from "../components/NewsletterSignUp";
import Banner1Section from "../components/Banner1Section";
import Banner2Section from "../components/Banner2Section";
import Social from "../components/Social";
import Footer from "../components/footer";
import ProductHeader from "../components/ProductHeader";
import ProductCategories from "../components/ProductCategories";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";

const ProductsPage: React.FC = () => {
    return <div className="products-section">
        <ProductHeader />
        <ProductCategories />
        <Container className="products-i">
            {/* <img src="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" /> */}
            <Row className="no-gutters">
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-55-2.jpg" />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-55-3.jpg" />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-55-4.jpg" />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-562.jpg"/>
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-57.jpg" />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-574.jpg" />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-56.jpg" />
                </Col>
                <Col className="justify-content-center px-0 mt-4" xs={6} sm={6} md={3}>
                    <Item imageUrl="/assets/images/PHOTO-2023-11-23-12-04-572.jpg" />
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
}

if(document.getElementById('products')){
    createRoot(document.getElementById('products')!).render(<ProductsPage />)
}