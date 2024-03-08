import React from "react";

type Props = {
    image: string
    onClick: (ct: string)=>void
    name: string
}

const ProductCategoryItem: React.FC<Props> = ({name, image, onClick}) => {
    return <div className="product-cat-item" onClick={()=>onClick(name)} style={{backgroundImage: "url('"+image+"')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
    </div>
}

export default ProductCategoryItem