import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AdItem from "./AdItem";
import ProductCategoryItem from "./ProductCategoryItem";
import { useWindowSize } from "@uidotdev/usehooks";
import Api from "../utils/apis";

const ProductCategories: React.FC = () => {
    const size = useWindowSize();
    const [categories, setCategories] = useState<Array<Category>>()

    useEffect(()=>{
        getCategories();
    },[])

    const getCategories = ()=>{
        new Api().GET_('/v1/categories').then(response=>{
            console.log("Response received is ");
            console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    setCategories(response.data.Categories);
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

    return <section className="product-categories-section">
        <Container fluid>
            <Row className="product-category-nav">
                <Navbar data-bs-theme="light">
                    <Container>
                    <Navbar.Brand href="#home"><h3 className="cat-text-f">Filter By</h3></Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link className="mx-2" href="#home" style={{ borderBottom: '5px solid chocolate' }}><span className="cat-text">Condiment Type</span></Nav.Link>
                        <Nav.Link className="mx-2" href="#features"><span className="cat-text">Better For You</span></Nav.Link>
                        <Nav.Link className="mx-2" href="#pricing"><span className="cat-text">Occassion</span></Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <Container fluid>
                        <Row>
                            <Splide
                                options={ {
                                    rewind: true,
                                    gap   : '1rem',
                                    perPage: size.width! < 481 ? 3 : 7,
                                    type: 'loop',
                                    autoplay: true
                                } }
                                aria-label="My Favorite Images"
                                >
                                    {
                                        categories != null || categories != undefined ?
                                        categories.length > 0 ?
                                        categories.map((ct: Category, i: number)=>{
                                            return <SplideSlide key={i}>
                                                    <ProductCategoryItem image={`http://localhost:8081${ct.ImagePath}`} />
                                                    {/* <img src="image1.jpg" alt="Image 1"/> */}
                                                </SplideSlide>
                                        })
                                        : ''
                                        : ''
                                    }
                            </Splide>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </section>
}

export default ProductCategories