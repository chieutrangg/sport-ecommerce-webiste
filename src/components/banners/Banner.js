import React from 'react'

function Banner() {
    return(
    <div className="row">
        <div className="col-2">
            <h1>Give You Workout <br /> A New Style</h1>
            <p>success isn't always about greatness. <br />It's about constistency. lalalalala</p>
            <a href="products.html" className="btn">Explore Now &#8594;</a>
        </div>
        <div className="col-2">
            <img src="images/image1.png" />
        </div>
    </div>
    );
}
export default Banner;