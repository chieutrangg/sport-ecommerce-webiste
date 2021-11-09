import React from "react";

function Sorting() {
    return(
        <div className="row row-2">
        <h2>All Products</h2>
        <select>
            <option>Default Sorting</option>
            <option>Sort by Price</option>
            <option>Sort by Popularity</option>
            <option>Sort by Rating</option>
            <option>Sort by most sold</option>
        </select>
    </div>
    )
};
export default Sorting;