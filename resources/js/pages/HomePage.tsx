import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client'
import Header from "../components/Header";
import ItemsAd from "../components/ItemsAd";
import NewsletterSignUp from "../components/NewsletterSignUp";
import Banner1Section from "../components/Banner1Section";
import Banner2Section from "../components/Banner2Section";
import Social from "../components/Social";
import Footer from "../components/Footer";
import CartButton from "../components/CartButton";
import Functions from "../utils/functions";
import Api from "../utils/apis";
import { VALUES } from "../utils/values"
import ItemFeatures from "../components/ItemFeatures";
import { Col, Container, Row } from "react-bootstrap";
import ItemPurposes from "../components/ItemPurposes";

var hosturl = VALUES.itemsBaseApiEndpoint;

const HomePage: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [itemFeatures, setItemFeatures] = useState<Array<Array<ItemFeature>>>([])
    const [itemPurposes, setItemPurposes] = useState<Array<Array<ItemPurpose>>>([])
    const [purposes, setPurposes] = useState<Array<Purpose>>()
    const [features, setFeatures] = useState<Array<Feature>>()
    const [categories, setCategories] = useState<Array<Category>>()
    const [aChange, setAChange] = useState(0)
    const [bChange, setBChange] = useState(0)


    useEffect(()=>{
        sessionStorage.setItem("selectedCategory", "all")
        const x = new Functions().getNumberOfItems();
        setCartItemCount(x);
        getCategories();
        getPurposes();
        getFeatures();
    },[])
    
    useEffect(()=>{
        callGetItemFeatures()
    },[features])

    useEffect(()=>{
        callGetItemPurposes()
    },[purposes])

    // useEffect(()=>{
    //     console.log("Item features after update are ")
    //     console.log(itemFeatures)
    //     setAChange(itemFeatures.length)
    // },[itemFeatures])

    // useEffect(()=>{
    //     // console.log("Item purposes after update are ")
    //     // console.log(itemPurposes)
    //     setBChange(itemPurposes.length)
    // },[itemPurposes])

    const updateCart = (item: Item, number_: number, action: string) =>{
        const x = new Functions().updateCart(item,number_,action);

        setCartItemCount(x);
    }

    const callGetItemFeatures = async () => {
        features?.filter((ift: Feature) => ift.Visible == true).map(async (ift: Feature)=>{
            await getItemFeatures(ift.FeatureId.toString());
        })

        // setAChange(!aChange)
    }

    const callGetItemPurposes = async () => {
        purposes?.filter((ift: Purpose) => ift.Visible == true).map(async (ift: Purpose)=>{
            await getItemPurposes(ift.PurposeId.toString());
        })

        // setBChange(!bChange)
    }

    const getCategories = ()=>{
        new Api().GET_(`${hosturl}/v1/categories`).then(response=>{
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

    const getItemPurposes = async (id: string)=>{
        new Api().GET_(`${hosturl}/v1/item-purposes/purposes/${id}`).then(response=>{
            console.log("Get Purpose items Response received is ");
            console.log(response);
            console.log(itemPurposes)
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    // I am using temp items 2 but for some reason I need to add the tempItems for it to behave right
                    let tempItems: Array<Array<ItemPurpose>> = itemPurposes
                    let tempItems2: Array<Array<ItemPurpose>> = [...itemPurposes, response.data.ItemPurposes]

                    console.log("Temp purposes are: ")
                    console.log(tempItems)
                    console.log("Temp purposes 2 are: ")
                    console.log(tempItems2)
                    tempItems.push(response.data.ItemPurposes)
                    // tempItems2.push(response.data.ItemPurposes)
                    setItemPurposes(tempItems2)

                    console.log("Temp item purposes are ")
                    console.log(tempItems)

                    console.log("Temp item purposes 2 are ")
                    console.log(tempItems2)
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

    const getItemFeatures = async (id: string)=>{
        new Api().GET_(`${hosturl}/v1/item-features/features/${id}`).then(response=>{
            console.log("Get Feature items Response received is ");
            console.log(response.data.ItemFeatures);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    // I am using temp items 2 but for some reason I need to add the tempItems for it to behave right
                    console.log("ITem features before")
                    console.log(itemFeatures)
                    let tempItems: Array<Array<ItemFeature>> = itemFeatures
                    let tempItems2: Array<Array<ItemFeature>> = [...itemFeatures, response.data.ItemFeatures]

                    console.log("Temp features are: ")
                    console.log(tempItems)
                    console.log("Temp features 2 are: ")
                    console.log(tempItems2)
                    tempItems.push(response.data.ItemFeatures)
                    // tempItems2.push(response.data.ItemFeatures)
                    setItemFeatures(tempItems2)

                    console.log("Temp item features are ")
                    console.log(tempItems)

                    console.log("Temp item features 2 are ")
                    console.log(tempItems2)
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

    const getPurposes = ()=>{
        new Api().GET_(`${hosturl}/v1/purposes`).then(response=>{
            // console.log("Get items Response received is ");
            // console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    setPurposes(response.data.Purposes);
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

    const getFeatures = ()=>{
        new Api().GET_(`${hosturl}/v1/features`).then(response=>{
            // console.log("Get items Response received is ");
            // console.log(response);
            if(response.status==200){
                if(response.data.StatusCode == 200){
                    // let tempFeatures: Array<Feature> | undefined = [...features]
                    setFeatures(response.data.Features);
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

    return <div style={{position: 'relative', width: '100%', height: '100%'}}>
        <Header />
        <ItemsAd categories={categories} />
        {
            (itemFeatures != undefined || itemFeatures != null) ?
                itemFeatures.length > 0 ?
                    <Container className="mt-4">
                        <Row>
                            <Col>
                                <Row>
                                    <Col style={{justifyContent: 'center', display: 'flex'}}>
                                        { itemFeatures[0].length > 0 ? <h1>Features</h1> : '' }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12}>
                                    {
                                        itemFeatures.map((itf: Array<ItemFeature>, i: number)=>{
                                            console.log("Each item feature is ")
                                            console.log(itf)
                                            console.log(itemFeatures)
                                            return itf.length > 0 ? <ItemFeatures key={i} title={itf[0].Feature.FeatureName} items={itf} updateCart={updateCart} categoryFilter="all" />
                                            : ''
                                            // return <Row>GET OUT { i }</Row>
                                        })
                                    }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                : '' : '' 
        }
        {
            (itemPurposes != undefined || itemPurposes != null) ?
                itemPurposes.length > 0 ?
                    <Container className="mt-4">
                        <Row>
                            <Col>
                                <Row>
                                    <Col style={{justifyContent: 'center', display: 'flex'}}>
                                     { itemPurposes[0].length > 0 ? <h1>Purposes</h1> : '' }
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    {
                                        itemPurposes.map((itp: Array<ItemPurpose>, i: number)=>{
                                            console.log("Each purpose is ")
                                            console.log(itemPurposes)
                                            return itp.length > 0 ? <ItemPurposes key={i} title={itp[0].Purpose.Purpose} items={itp} updateCart={updateCart} categoryFilter="all" />
                                            : ''
                                        })
                                    }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                : '' : '' 
        }
        <NewsletterSignUp />
        <Banner1Section />
        <Banner2Section />
        <Social />
        <CartButton count_={cartItemCount} />
        <Footer />
    </div>
}

if(document.getElementById('homePage')){
    createRoot(document.getElementById('homePage')!).render(<HomePage />)
}