import React from 'react';
import ShopCard from "./ShopCard";

function CardView( {cards} ) {
    const elements = cards.map(item =>
        <ShopCard name={item.name} price={item.price} color={item.color} img={item.img}/>);
    return (
        <div className='content'>
            <div className='cardView'>
                {elements}
            </div>
        </div>
    );
}

export default CardView;