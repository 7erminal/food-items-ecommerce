import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AdItem from "./AdItem";

const ItemsAd: React.FC = () => {
    return <section className="itemsAdSection">
        <Container fluid>
            <Row>
                <Col xs={12} md={12} className="itemsAd-half-1">
                    <Row className="itemsAd-title">
                        <h1 className="c-title">EXPLORE</h1>
                    </Row>
                </Col>
                <Col xs={12} md={12} className="itemsAd-half-2">
                    <Container className="itemsAd-list">
                        <Row>
                            <Splide
                                options={ {
                                    rewind: true,
                                    gap   : '1rem',
                                    perPage: 4,
                                    type: 'loop'
                                } }
                                aria-label="My Favorite Images"
                                >
                                <SplideSlide>
                                    <AdItem image="/assets/images/PHOTO-2023-11-23-12-04-54.jpg" />
                                    {/* <img src="image1.jpg" alt="Image 1"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <AdItem image="/assets/images/PHOTO-2023-11-23-12-05-58-2.jpg" />
                                    {/* <img src="image2.jpg" alt="Image 2"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <AdItem image="/assets/images/PHOTO-2023-11-23-12-05-58.jpg" />
                                    {/* <img src="image3.jpg" alt="Image 3"/> */}
                                </SplideSlide>
                                <SplideSlide>
                                    <AdItem image="/assets/images/PHOTO-2023-11-23-12-05-59.jpg" />
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

export default ItemsAd