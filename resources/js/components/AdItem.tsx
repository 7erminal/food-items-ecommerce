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

    return <div className="itemAd-card" onClick={setSelectedCategory} style={{backgroundImage: "url('"+image+"')", backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', textShadow: '1px 1px 1px 1px #4A3D3D' }}>{name}</span>
    </div>
}

export default AdItem