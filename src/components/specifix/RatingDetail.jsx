/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingDetail = ({ detailRate }) => {
    //console.log("rating inside", detailRate);
    return (
        // rate ?
        <div className="rating-box">
            <div className="user-info">
                <img src="./assets/images/specific-tour/user-avatar.png" />
                <p>{detailRate.user.user_name}</p>
            </div>
            <div className="top">
                {/* <div className="date">04 Tháng 2, 2020</div> */}
                <span className="rating-value">

                    {/* <h4>{detailRate.rating}</h4> */}
                    <StarRatings
                        rating={detailRate.rating}
                        starRatedColor="#FFC527"
                        numberOfStars={5}
                        className='rating'
                        starDimension='15px'
                        starSpacing='2px'
                    />


                    {/* <div className="rating-star">
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                        <i className="fas fa-star yellow-star" />
                    </div> */}
                </span>
            </div>
            <div className="content">
                <p>{detailRate.comment}</p>

            </div>
            {/* <span className="select-mode">Ẩn bớt</span> */}
        </div>
        // :
        // null
    );
};

export default RatingDetail;