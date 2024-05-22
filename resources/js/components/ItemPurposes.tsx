import React from "react";
import { Col, Row } from "react-bootstrap";
import Api from "../utils/apis";
import { VALUES } from "../utils/values"
import Item from "./Item";
import Functions from "../utils/functions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useWindowSize } from "@uidotdev/usehooks";

var hosturl = VALUES.itemsBaseApiEndpoint;

type Props = {
    items: Array<ItemPurpose> | undefined
    categoryFilter: string
    updateCart: (item: Item, number_: number, action: string)=>void
    title: string
}

const ItemPurposes: React.FC<Props> = ({items, title, categoryFilter, updateCart})=>{
    const getItemDisplayImage = (itemId: string) => {
        new Api().GET_(`${hosturl}/v1/item-images/`+itemId).then(response=>{
            // console.log("Response received for images is ");
            // console.log(response);
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

    const size = useWindowSize();
    
    return <Row className="no-gutters mt-2">
            <Row>
                <Col className="justfify-content-center d-flex">
                    <h4>{title}</h4>
                </Col>
            </Row>
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
        items != null || items != undefined ?
            items.length > 0 ?
            items.filter((it: ItemPurpose)=>it.Item.Category.CategoryName==categoryFilter || categoryFilter == "all").map((it: ItemPurpose, i: number)=>{
                const imageurl = getItemDisplayImage(it.Item.ItemId.toString())
                return <SplideSlide key={i} className="">
                        <Item itemDetails={it.Item} updateCart={updateCart} imageUrl={it.Item.ImagePath} />
                    </SplideSlide>
            })
            : ''
        : ''
    }
    </Splide>
    </Row>
}

export default ItemPurposes