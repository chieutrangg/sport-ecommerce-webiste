import React from 'react'
import UserReview from './UserReview';

function Review() {
    const userReviews = [
        {
            image: 'images/user-1.png',
            name: 'Emily Parker',
            review:'write your review about product here'
        },
        {
            image: 'images/user-2.png',
            name: 'Mark Zuckerberg',
            review:'write your review about product here'
        },
        {
            image: 'images/user-3.png',
            name: 'Tessa Messa',
            review:'write your review about product here'
        }
    ]
    return(
        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    {userReviews.map((user, index) =>{
                        return(
                            <UserReview image={user.image} name={user.name} review={user.review} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
export default Review;