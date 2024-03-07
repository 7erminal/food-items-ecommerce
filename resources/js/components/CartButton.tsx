import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

type Props = {
    count_: number
}

const CartButton: React.FC<Props> = ({count_})=>{
    
    const navigate = () => {
        window.location.href = '/cart';
    }

    return <div className="cart-button" onClick={navigate}>
            <span className="cart-icon centerDiv">
                <div><b>{count_}</b></div>
                <FontAwesomeIcon size="2xl" icon={faCartArrowDown} />
            </span>
        </div>
}

export default CartButton;