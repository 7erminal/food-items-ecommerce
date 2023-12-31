import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AdItem from "./AdItem";
import ProductCategoryItem from "./ProductCategoryItem";
import { useWindowSize } from "@uidotdev/usehooks";

const ProductCategories: React.FC = () => {
    const size = useWindowSize();

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
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-04-54.jpg" />
                                    {/* <img src="image1.jpg" alt="Image 1"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-05-58-2.jpg" />
                                    {/* <img src="image2.jpg" alt="Image 2"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-05-58.jpg" />
                                    {/* <img src="image3.jpg" alt="Image 3"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-05-59.jpg" />
                                    {/* <img src="image3.jpg" alt="Image 3"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-04-54.jpg" />
                                    {/* <img src="image1.jpg" alt="Image 1"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-05-58-2.jpg" />
                                    {/* <img src="image2.jpg" alt="Image 2"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-05-58.jpg" />
                                    {/* <img src="image3.jpg" alt="Image 3"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <ProductCategoryItem image="/assets/images/PHOTO-2023-11-23-12-05-59.jpg" />
                                    {/* <img src="image3.jpg" alt="Image 3"/> */}
                                </SplideSlide>
                            </Splide>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </section>
}

export default ProductCategories