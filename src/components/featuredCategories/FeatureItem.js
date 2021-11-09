import React from 'react'

function FeatureItem({image}){
    return(
        <div className="col-3">
            <img src={image} />
        </div>
    );
};
export default FeatureItem;