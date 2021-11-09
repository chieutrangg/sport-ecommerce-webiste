import React from "react";

function Item({image, name, price}) {
    return(
        <div className="col-4">
            <img src={image} />
            <h4>{name}</h4>
            <p>${price}</p>
        </div>
    )
};
export default Item;