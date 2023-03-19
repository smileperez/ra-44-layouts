import React from "react";

function ShopCard( {name, price, color, img} ) {
    return (
        <div className="shop-card">
            <h2 className="center">{name}</h2>
            <p className="center">{color}</p>
                <img className="img-list-item center" src={img} alt={name}>
                </img>
                <div className="price-shop-card">
                    <p className="price-item center">{"$"}{price}</p>
                    <button className="btn-item">{"Add to cart"}</button>
                </div>
        </div>
    )
}

export default ShopCard;