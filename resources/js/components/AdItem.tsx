import React from "react";

type Props = {
    image: string
    name: string
}

const AdItem: React.FC<Props> = ({image, name}) => {
    const setSelectedCategory = () => {
        sessionStorage.setItem("selectedCategory", name)

        window.location.href = "/products"
    }

    return <div className="itemAd-card" onClick={setSelectedCategory} style={{backgroundImage: "url('"+image+"')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
    </div>
}

export default AdItem