/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';

export const WishList = () => {
    return (
        <div className="discount-zone landing container wide3">
            <h1 className="heading">
                <span>Các điểm đến được yêu thích</span>
                <span><i className="fas fa-arrow-left hide" /></span>
                <span><i className="fas fa-arrow-right" /></span>
            </h1>
            <div className="row">
                <div className="col-4">
                    <div className="full-height" style={{ backgroundImage: 'url(/assets/images/landing/content1.png)' }}>
                        <div className="discount-value">25% Off</div>
                        <a className="destination-desc">
                            <div>
                                <h3>Hội An</h3>
                                <div className="link-button">
                                    <span><i className="fas fa-arrow-right" /></span>
                                </div>
                            </div>
                            <p>Vẻ đẹp thời gian ngưng đọng</p>
                        </a>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="half-height" style={{ backgroundImage: 'url(/assets/images/landing/content2.jpg)' }}>
                                <div className="discount-value">55% Off</div>
                                <a className="destination-desc">
                                    <div>
                                        <h3>Hạ Long</h3>
                                        <div className="link-button">
                                            <span><i className="fas fa-arrow-right" /></span>
                                        </div>
                                    </div>
                                    <p>Kỳ quan thiên nhiên thế giới</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="half-height" style={{ backgroundImage: 'url(/assets/images/landing/content3.jpg)' }}>
                                <div className="discount-value">55% Off</div>
                                <a className="destination-desc">
                                    <div>
                                        <h3>Hà Nội </h3>
                                        <div className="link-button">
                                            <span><i className="fas fa-arrow-right" /></span>
                                        </div>
                                    </div>
                                    <p>Nghìn năm văn hiến</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="half-height" style={{ backgroundImage: 'url(/assets/images/landing/content4.jpg)' }}>
                                <div className="discount-value">55% Off</div>
                                <a className="destination-desc">
                                    <div>
                                        <h3>Phú Quốc</h3>
                                        <div className="link-button">
                                            <span><i className="fas fa-arrow-right" /></span>
                                        </div>
                                    </div>
                                    <p>Hòn ngọc của Việt Nam</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="half-height" style={{ backgroundImage: 'url(/assets/images/landing/content5.jpg)' }}>
                                <div className="discount-value">55% Off</div>
                                <a className="destination-desc">
                                    <div>
                                        <h3>Hội An</h3>
                                        <div className="link-button">
                                            <span><i className="fas fa-arrow-right" /></span>
                                        </div>
                                    </div>
                                    <p>Vẻ đẹp thời gian ngưng đọng</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
