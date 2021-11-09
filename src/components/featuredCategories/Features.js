import React from 'react'
import FeatureItem from './FeatureItem';

function Features() {
    const featureData = ["images/category-1.jpg","images/category-2.jpg","images/category-3.jpg"];

    return(
    <div className="categories">
        <div className="small-container">
            <div className="row">
                {
                    featureData.map((item, index) => {return (
                        <FeatureItem image={item} key={index}/>
                    )})
                }
            </div>
        </div>
    </div>

  
    );
};
export default Features;