import React from "react";
import { Col, Row } from "react-bootstrap";
import Api from "../utils/apis";
import { VALUES } from "../utils/values"
import Item from "./Item";
import Functions from "../utils/functions";

var hosturl = VALUES.itemsBaseApiEndpoint;

type Props = {
    items: Array<Item> | undefined
    categoryFilter: string
    updateCart: (item: Item, number_: number, action: string)=>void
}

const Items: React.FC<Props> = ({items, categoryFilter, updateCart})=>{
    const getItemDisplayImage = (itemId: string) => {
        new Api().GET_(`${hosturl}/v1/item-images/`+itemId).then(response=>{
            console.log("Response received for images is ");
            console.log(response);
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
    
    return <Row className="no-gutters">
    {
        items != null || items != undefined ?
            items.length > 0 ?
            items.filter((it: Item)=>it.Category.CategoryName==categoryFilter || categoryFilter == "all").map((it: Item, i: number)=>{
                const imageurl = getItemDisplayImage(it.ItemId.toString())
                console.log("IMAGE URL RETURNED IS ")
                console.log(imageurl)
                return <Col key={i} className="justify-content-center d-flex px-0 mt-4" xs={6} sm={6} md={3}>
                            <Item itemDetails={it} updateCart={updateCart} imageUrl={it.ImagePath} />
                        </Col>
            })
            : ''
        : ''
    }
    </Row>
}

export default Items