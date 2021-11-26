/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const BannerHero = () => {
    return (
        <div className="banner container wide">
            <img className="main-img" src="./assets/images/landing/banner.jpg" />
            <img src="./assets/images/landing/cloud2.png" className="sub-img1" />
            <img src="./assets/images/landing/cloud3.png" className="sub-img2" />
            <div className="banner-title">
                <h1>Khám phá <br /> những <br /> trải nghiệm mới</h1>
            </div>
            <div className="search-tool">
                <div className="option">
                    <span><i className="fas fa-map-marker-alt" /></span>
                    <div className="option-text">
                        <p>Điểm đến</p>
                        <input type="text"  placeholder="Bạn muốn đi đâu?" />
                    </div>
                </div>
                <div className="option">
                    <span><i className="fas fa-calendar" /></span>
                    <div className="option-text">
                        <p>Ngày đến</p>
                        <input type="text"  placeholder="Chọn ngày" />
                    </div>
                </div>
                <div className="option">
                    <span><i className="fas fa-calendar" /></span>
                    <div className="option-text">
                        <p>Ngày về</p>
                        <input type="text"  placeholder="Chọn ngày" />
                    </div>
                </div>
                <div className="option">
                    <span><i className="fas fa-user-friends" /></span>
                    <div className="option-text">
                        <p>Số khách</p>
                        <input type="text"  placeholder="Thêm người" />
                    </div>
                </div>
                <div className="search-icon">
                    <i className="fas fa-search" />
                </div>
            </div>
        </div>
    );
};
