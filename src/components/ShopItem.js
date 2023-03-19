import React from "react";

function ShopItem( {img, name, color, price} ) {
 return (
         <div className="shop-item">
            <img className="img-card-item" src={img} alt={name}></img>
            <h2 className="h2-shop-item center">{name}</h2>
            <p className="p-shop-item center">{color}</p>
            <p className="price-item center">{"$"}{price}</p>
            <div className="center">
                <button className="btn-item ">{"Add to cart"}</button>
            </div>
         </div>
 );
}

export default ShopItem;