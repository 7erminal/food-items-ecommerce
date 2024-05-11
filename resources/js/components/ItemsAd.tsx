import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useWindowSize } from "@uidotdev/usehooks";
import AdItem from "./AdItem";

const ItemsAd: React.FC = () => {
    const size = useWindowSize();

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
                                    perPage: size.width! < 481 ? 1 : 4,
                                    type: 'loop',
                                    autoplay: true
                                } }
                                aria-label="Categories"
                                >
                                <SplideSlide className="">
                                    <AdItem image="/assets/images/PHOTO-2024-04-26-17-17-08.jpg" />
                                    {/* <img src="image1.jpg" alt="Image 1"/> */}
                                </SplideSlide>
                                <SplideSlide className="">
                                    <AdItem image="/assets/images/PHOTO-2024-04-26-17-17-08-5.jpg" />
                                    {/* <img src="image2.jpg" alt="Image 2"/> */}
                                </SplideSlide>
                                <SplideSlide className="">
                                    <AdItem image="/assets/images/PHOTO-2024-04-26-17-17-08-4.jpg" />
                                    {/* <img src="image3.jpg" alt="Image 3"/> */}
                                </SplideSlide>
                                <SplideSlide className="">
                                    <AdItem image="/assets/images/PHOTO-2024-04-26-17-17-06-4.jpg" />
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