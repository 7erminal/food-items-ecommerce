import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useWindowSize } from "@uidotdev/usehooks";
import AdItem from "./AdItem";
import { VALUES } from "../utils/values";

var hosturl = VALUES.itemsBaseApiEndpoint;

type Props = {
    categories: Array<Category> | undefined
}

const ItemsAd: React.FC<Props> = ({categories}) => {
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
                                    {
                                        categories != undefined && categories.length > 0 ?
                                        categories.map((cat: Category, i: number)=>{
                                            return <SplideSlide key={i} className="">
                                            <AdItem image={`${hosturl}${cat.ImagePath}`} name={cat.CategoryName} />
                                            {/* <img src="image1.jpg" alt="Image 1"/> */}
                                        </SplideSlide>
                                        }) : ''
                                    }
                            </Splide>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </section>
}

export default ItemsAd