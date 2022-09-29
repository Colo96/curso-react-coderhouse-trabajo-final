import React from 'react';
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = ({greeting}) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }
    
    return (
        <div className='container-prod'>
           {greeting}
           <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}