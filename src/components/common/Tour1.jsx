/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const Tour1 = () => {
    return (
        <div className="item">
            <div className="category-img" style={{ backgroundImage: 'url(/assets/images/landing/paris.jpg)' }} />
            <div className="category-info">
                <img src="./assets/images/landing/icon6.png" />
                <div className="location">Pháp</div>
                <div className="cost-info">2N / 1Đ</div>
            </div>
            <div className="category-title">
                <p>Tour Chụp ảnh: Paris mộng mơ</p>
            </div>
            <div className="rating">
                <span><i className="fas fa-star" /></span>
                <span className="value">5.0</span>
                <span className="rating-quality">(155 ratings)</span>
            </div>
            <span className="cost">13,990,000 đ</span>
        </div>

    );
};
