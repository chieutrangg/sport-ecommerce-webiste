import React from "react";
import Item from './Item'

function AllProduct() {
    const allProducts = [
        {
            name: 'Red Printed T-Shirt',
            image: "images/product-1.jpg",
            price: '100.00'
        },
        {
            name: 'Cool Black Shoes',
            image: "images/product-2.jpg",
            price: '50.00'
        },
        {
            name: 'Black Painted Pants',
            image: "images/product-3.jpg",
            price: '70.00'
        },
        {
            name: 'Blue Printed T-Shirt',
            image: "images/product-4.jpg",
            price: '50.00'
        },
        {
            name: 'Red Printed T-Shirt',
            image: "images/product-5.jpg",
            price: '100.00'
        },
        {
            name: 'Cool Black Shoes',
            image: "images/product-6.jpg",
            price: '50.00'
        },
        {
            name: 'Black Painted Pants',
            image: "images/product-7.jpg",
            price: '70.00'
        },
        {
            name: 'Blue Printed T-Shirt',
            image: "images/product-8.jpg",
            price: '50.00'
        }
    ]
    return(
        <div className="small-container">
        <div className="row">
        {Array.apply(null, Array(allProducts.length / 4)).map((row, index) => {
                    return (
                        <div className="row" key={index}>
                            {allProducts.slice(index * 4, 4 + index * 4).map((product, i) => {
                                return (
                                    <Item name={product.name} image={product.image} price={product.price} key={i}/>
                                )
                            })}
                        </div>
                    )
                })}
        </div>
        </div>
        
    
    )           
};
export default AllProduct;