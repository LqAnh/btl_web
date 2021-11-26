/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import RatingDetail from './RatingDetail';

export const Rating = () => {
    return (
        <div className="user-rating container">
            <div className="recommend-rating">
                <h1 className="heading">Để lại đánh giá của bạn</h1>
                <p>Hãy <a href>đăng nhập</a> để có thể đánh giá</p>
            </div>
            <div className="row">
                <div className="col-6">
                    <RatingDetail/>
                </div>
                <div className="col-6">
                    <RatingDetail/>
                </div>
                <div className="col-6">
                    <RatingDetail/>
                </div>
                <div className="col-6">
                    <RatingDetail/>
                </div>
            </div>
        </div>

    );
};
