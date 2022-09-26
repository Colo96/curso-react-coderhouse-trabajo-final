import React from 'react';
import "./ItemListContainer.css";

export const ItemListContainer = ({greeting}) => {
    return (
        <div className='container-prod'>
           {greeting}
        </div>
    )
}