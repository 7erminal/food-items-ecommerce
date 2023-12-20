import React from "react";

type Props = {
    image: string
}

const ProductCategoryItem: React.FC<Props> = ({image}) => {
    return <div className="product-cat-item" style={{backgroundImage: "url('"+image+"')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
    </div>
}

export default ProductCategoryItem