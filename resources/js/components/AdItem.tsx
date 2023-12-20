import React from "react";

type Props = {
    image: string
}

const AdItem: React.FC<Props> = ({image}) => {
    return <div className="itemAd-card" style={{backgroundImage: "url('"+image+"')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
    </div>
}

export default AdItem