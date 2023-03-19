import React from "react";
import ShopItem from "./ShopItem";

function ListView( {items } ) {
    const elements = items.map(item =>
        <ShopItem name={item.name} price={item.price} color={item.color} img={item.img}/>);
    return (
        <div className='content'>
            <div className='listView'>
                {elements}
            </div>
        </div>
    );
}

export default ListView;