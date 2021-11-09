import React from 'react'

function UserReview({review, image, name}) {
    return(
        <div className="col-3">
            <p> {review}</p>
            <img src={image} />
            <h3>{name}</h3>
        </div>
    );
};
export default UserReview;