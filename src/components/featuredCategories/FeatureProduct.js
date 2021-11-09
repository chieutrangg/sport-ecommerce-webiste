import React from 'react'
import FeatureProductItem from './FeatureProductItem'

function FeatureProduct(){
    const featureProduct = [
        {
            image: "images/product-1.jpg",
            name: "Red Printed T-Shirt",
            price: 100.00
        },
        {
            image: "images/product-2.jpg",
            name: "Cool Black Shoes",
            price: 50.00
        },
        {
            image: "images/product-3.jpg",
            name: "Black Painted Pants",
            price: 70.00
        },
        {
            image: "images/product-4.jpg",
            name: "Blue Printed T-Shirt",
            price: 50.00
        },
    ]
    // row = 0
    // splice(row * 4, row * 4 + 4)
    // splice(0, 4)
    // splice(4, 8)
    const bestDeal = [
        {
            image: "images/product-5.jpg",
            name: "Red Printed T-Shirt",
            price: 100.00
        },
        {
            image: "images/product-6.jpg",
            name: "Cool Black Shoes",
            price: 50.00
        },
        {
            image: "images/product-7.jpg",
            name: "Black Painted Pants",
            price: 70.00
        },
        {
            image: "images/product-8.jpg",
            name: "Blue Printed T-Shirt",
            price: 50.00
        },
        {
            image: "images/product-9.jpg",
            name: "Red Printed T-Shirt",
            price: 100.00
        },
        {
            image: "images/product-10.jpg",
            name: "Cool Black Shoes",
            price: 50.00
        },
        {
            image: "images/product-11.jpg",
            name: "Black Painted Pants",
            price: 70.00
        },
        {
            image: "images/product-12.jpg",
            name: "Blue Printed T-Shirt",
            price: 50.00
        },
    ]
    return(
        <div className="small-container">
            <h2 className="title">Featured Products</h2>
            <div className="row">
                {featureProduct.map((product, index) => {
                    return (
                        <FeatureProductItem name={product.name} image={product.image} price={product.price} key={index}/>
                    )
                })}
            </div>

            <h2 className="title">Best Deals</h2>
                {Array.apply(null, Array(bestDeal.length / 4)).map((row, index) => {
                    return (
                        <div className="row" key={index}>
                            {bestDeal.slice(index * 4, 4 + index * 4).map((product, i) => {
                                return (
                                    <FeatureProductItem name={product.name} image={product.image} price={product.price} key={i}/>
                                )
                            })}
                        </div>
                    )
                })}
        </div>
    );
};
export default FeatureProduct;