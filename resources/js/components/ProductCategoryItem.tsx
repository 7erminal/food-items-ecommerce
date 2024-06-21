import React from "react";
import { Col, Row } from "react-bootstrap";

type Props = {
    image: string
    onClick: (ct: string)=>void
    name: string
}

const ProductCategoryItem: React.FC<Props> = ({name, image, onClick}) => {
    return <div>
        <Row>
        <Col style={{textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
            <div className="product-cat-item" onClick={()=>onClick(name)} style={{backgroundImage: "url('"+image+"')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
        </Col>
    </Row>

    <Row>
        <Col style={{textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center'}} className="category-name">
            <span className="product-cat-item2"onClick={()=>onClick(name)}>{ name }</span>
        </Col>
    </Row>
    </div>
}

export default ProductCategoryItem