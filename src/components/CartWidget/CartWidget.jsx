import React from 'react';
import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return (
        <div>
           <FontAwesomeIcon className="iconoCarrito" icon={faCartShopping} />
           <span className="cartNumber"> 5 </span>
        </div>
    )
}