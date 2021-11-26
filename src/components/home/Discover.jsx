/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Discover = () => {
    return (
        <div className="discover container wide3">
            <div className="inner-container">
                <h1 className="heading">Khám phá</h1>
                <h4 className="sub-heading">Hàng ngàn trải nghiệm thú vị đang đợi bạn</h4>
                <ul className="discover-nav">
                    <li className="item selected"><a href="#">Theo thành phố</a></li>
                    <li className="item"><a href="#">Theo tour</a></li>
                    <li className="item"><a href="#">Theo trải nghiệm</a></li>
                </ul>
                <div className="row">
                    <div className="col-3">
                        <div className="item" style={{ color: '#B0CA5F' }}>
                            <div className="image" style={{ backgroundImage: 'url(./assets/images/landing/Hanoi.jpg)' }} />
                            <div className="bottom">
                                <h4 className="name">Hà Nội</h4>
                                <div className="distance">
                                    <span>
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66277 11.5908C4.48055 11.5926 4.30246 11.5366 4.15409 11.4308C4.00572 11.325 3.8947 
                                      11.1749 3.83699 11.002L0.632135 1.74329C0.578412 1.58811 0.56944 1.42095 0.606246 1.26091C0.643052 
                                      1.10088 0.724149 0.95443 0.840266 0.838313C0.956383 0.722196 1.10283 0.641099 1.26287 0.604293C1.4229 
                                      0.567487 1.59007 0.576458 1.74524 0.630182L11.0039 3.8352C11.1783 3.89555 11.3291 4.00949 11.4349 4.16072C11.5406 
                                      4.31195 11.5958 4.49273 11.5926 4.67723C11.5894 4.86172 11.528 5.04048 11.4171 5.18796C11.3062 5.33543 11.1515 5.44408 
                                      10.9751 5.49835L6.78836 6.78646L5.5002 10.9731C5.44771 11.1505 5.33954 11.3063 5.19167 11.4175C5.0438 11.5287 4.86408 11.5894 
                                      4.67906 11.5906C4.67365 11.5907 4.66813 11.5908 4.66277 11.5908V11.5908ZM1.4589 1.457L4.66386 10.7158L5.95203 6.52916C5.99393 
                                      6.39269 6.06863 6.26857 6.16959 6.16764C6.27054 6.06671 6.39469 5.99205 6.53117 5.95018L10.7177 4.66202L1.4589 1.457Z" fill="#E3E3E3" />
                                        </svg>
                                        14km
                                    </span>
                                </div>
                                <div className="tour-button">
                                    <span>100+ tour</span>
                                    <div><i className="fas fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="item" style={{ color: '#80680E' }}>
                            <div className="image" style={{ backgroundImage: 'url(./assets/images/landing/ThaiNguyen.jpg)' }} />
                            <div className="bottom">
                                <h4 className="name">Thái Nguyên</h4>
                                <div className="distance">
                                    <span>
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66277 11.5908C4.48055 11.5926 4.30246 11.5366 4.15409 11.4308C4.00572 11.325 3.8947 
                                      11.1749 3.83699 11.002L0.632135 1.74329C0.578412 1.58811 0.56944 1.42095 0.606246 1.26091C0.643052 
                                      1.10088 0.724149 0.95443 0.840266 0.838313C0.956383 0.722196 1.10283 0.641099 1.26287 0.604293C1.4229 
                                      0.567487 1.59007 0.576458 1.74524 0.630182L11.0039 3.8352C11.1783 3.89555 11.3291 4.00949 11.4349 4.16072C11.5406 
                                      4.31195 11.5958 4.49273 11.5926 4.67723C11.5894 4.86172 11.528 5.04048 11.4171 5.18796C11.3062 5.33543 11.1515 5.44408 
                                      10.9751 5.49835L6.78836 6.78646L5.5002 10.9731C5.44771 11.1505 5.33954 11.3063 5.19167 11.4175C5.0438 11.5287 4.86408 11.5894 
                                      4.67906 11.5906C4.67365 11.5907 4.66813 11.5908 4.66277 11.5908V11.5908ZM1.4589 1.457L4.66386 10.7158L5.95203 6.52916C5.99393 
                                      6.39269 6.06863 6.26857 6.16959 6.16764C6.27054 6.06671 6.39469 5.99205 6.53117 5.95018L10.7177 4.66202L1.4589 1.457Z" fill="#E3E3E3" />
                                        </svg>
                                        14km
                                    </span>
                                </div>
                                <div className="tour-button">
                                    <span>100+ tour</span>
                                    <div><i className="fas fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="item" style={{ color: '#37545A' }}>
                            <div className="image" style={{ backgroundImage: 'url(./assets/images/landing/CanTho.jpg)' }} />
                            <div className="bottom">
                                <h4 className="name">Cần Thơ</h4>
                                <div className="distance">
                                    <span>
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66277 11.5908C4.48055 11.5926 4.30246 11.5366 4.15409 11.4308C4.00572 11.325 3.8947 
                                      11.1749 3.83699 11.002L0.632135 1.74329C0.578412 1.58811 0.56944 1.42095 0.606246 1.26091C0.643052 
                                      1.10088 0.724149 0.95443 0.840266 0.838313C0.956383 0.722196 1.10283 0.641099 1.26287 0.604293C1.4229 
                                      0.567487 1.59007 0.576458 1.74524 0.630182L11.0039 3.8352C11.1783 3.89555 11.3291 4.00949 11.4349 4.16072C11.5406 
                                      4.31195 11.5958 4.49273 11.5926 4.67723C11.5894 4.86172 11.528 5.04048 11.4171 5.18796C11.3062 5.33543 11.1515 5.44408 
                                      10.9751 5.49835L6.78836 6.78646L5.5002 10.9731C5.44771 11.1505 5.33954 11.3063 5.19167 11.4175C5.0438 11.5287 4.86408 11.5894 
                                      4.67906 11.5906C4.67365 11.5907 4.66813 11.5908 4.66277 11.5908V11.5908ZM1.4589 1.457L4.66386 10.7158L5.95203 6.52916C5.99393 
                                      6.39269 6.06863 6.26857 6.16959 6.16764C6.27054 6.06671 6.39469 5.99205 6.53117 5.95018L10.7177 4.66202L1.4589 1.457Z" fill="#E3E3E3" />
                                        </svg>
                                        14km
                                    </span>
                                </div>
                                <div className="tour-button">
                                    <span>100+ tour</span>
                                    <div><i className="fas fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="item" style={{ color: '#B6C3B9' }}>
                            <div className="image" style={{ backgroundImage: 'url(./assets/images/landing/PhuQuoc.jpg)' }} />
                            <div className="bottom">
                                <h4 className="name">Phú Quốc</h4>
                                <div className="distance">
                                    <span>
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66277 11.5908C4.48055 11.5926 4.30246 11.5366 4.15409 11.4308C4.00572 11.325 3.8947 
                                      11.1749 3.83699 11.002L0.632135 1.74329C0.578412 1.58811 0.56944 1.42095 0.606246 1.26091C0.643052 
                                      1.10088 0.724149 0.95443 0.840266 0.838313C0.956383 0.722196 1.10283 0.641099 1.26287 0.604293C1.4229 
                                      0.567487 1.59007 0.576458 1.74524 0.630182L11.0039 3.8352C11.1783 3.89555 11.3291 4.00949 11.4349 4.16072C11.5406 
                                      4.31195 11.5958 4.49273 11.5926 4.67723C11.5894 4.86172 11.528 5.04048 11.4171 5.18796C11.3062 5.33543 11.1515 5.44408 
                                      10.9751 5.49835L6.78836 6.78646L5.5002 10.9731C5.44771 11.1505 5.33954 11.3063 5.19167 11.4175C5.0438 11.5287 4.86408 11.5894 
                                      4.67906 11.5906C4.67365 11.5907 4.66813 11.5908 4.66277 11.5908V11.5908ZM1.4589 1.457L4.66386 10.7158L5.95203 6.52916C5.99393 
                                      6.39269 6.06863 6.26857 6.16959 6.16764C6.27054 6.06671 6.39469 5.99205 6.53117 5.95018L10.7177 4.66202L1.4589 1.457Z" fill="#E3E3E3" />
                                        </svg>
                                        14km
                                    </span>
                                </div>
                                <div className="tour-button">
                                    <span>100+ tour</span>
                                    <div><i className="fas fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="item" style={{ color: '#B28D5F' }}>
                            <div className="image" style={{ backgroundImage: 'url(./assets/images/landing/CaoBang.jpg)' }} />
                            <div className="bottom">
                                <h4 className="name">Cao Bằng</h4>
                                <div className="distance">
                                    <span>
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66277 11.5908C4.48055 11.5926 4.30246 11.5366 4.15409 11.4308C4.00572 11.325 3.8947 
                                      11.1749 3.83699 11.002L0.632135 1.74329C0.578412 1.58811 0.56944 1.42095 0.606246 1.26091C0.643052 
                                      1.10088 0.724149 0.95443 0.840266 0.838313C0.956383 0.722196 1.10283 0.641099 1.26287 0.604293C1.4229 
                                      0.567487 1.59007 0.576458 1.74524 0.630182L11.0039 3.8352C11.1783 3.89555 11.3291 4.00949 11.4349 4.16072C11.5406 
                                      4.31195 11.5958 4.49273 11.5926 4.67723C11.5894 4.86172 11.528 5.04048 11.4171 5.18796C11.3062 5.33543 11.1515 5.44408 
                                      10.9751 5.49835L6.78836 6.78646L5.5002 10.9731C5.44771 11.1505 5.33954 11.3063 5.19167 11.4175C5.0438 11.5287 4.86408 11.5894 
                                      4.67906 11.5906C4.67365 11.5907 4.66813 11.5908 4.66277 11.5908V11.5908ZM1.4589 1.457L4.66386 10.7158L5.95203 6.52916C5.99393 
                                      6.39269 6.06863 6.26857 6.16959 6.16764C6.27054 6.06671 6.39469 5.99205 6.53117 5.95018L10.7177 4.66202L1.4589 1.457Z" fill="#E3E3E3" />
                                        </svg>
                                        14km
                                    </span>
                                </div>
                                <div className="tour-button">
                                    <span>100+ tour</span>
                                    <div><i className="fas fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="item" style={{ color: '#343629' }}>
                            <div className="image" style={{ backgroundImage: 'url(./assets/images/landing/DaNang.jpg)' }} />
                            <div className="bottom">
                                <h4 className="name">Đà Nẵng</h4>
                                <div className="distance">
                                    <span>
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66277 11.5908C4.48055 11.5926 4.30246 11.5366 4.15409 11.4308C4.00572 11.325 3.8947 
                                      11.1749 3.83699 11.002L0.632135 1.74329C0.578412 1.58811 0.56944 1.42095 0.606246 1.26091C0.643052 
                                      1.10088 0.724149 0.95443 0.840266 0.838313C0.956383 0.722196 1.10283 0.641099 1.26287 0.604293C1.4229 
                                      0.567487 1.59007 0.576458 1.74524 0.630182L11.0039 3.8352C11.1783 3.89555 11.3291 4.00949 11.4349 4.16072C11.5406 
                                      4.31195 11.5958 4.49273 11.5926 4.67723C11.5894 4.86172 11.528 5.04048 11.4171 5.18796C11.3062 5.33543 11.1515 5.44408 
                                      10.9751 5.49835L6.78836 6.78646L5.5002 10.9731C5.44771 11.1505 5.33954 11.3063 5.19167 11.4175C5.0438 11.5287 4.86408 11.5894 
                                      4.67906 11.5906C4.67365 11.5907 4.66813 11.5908 4.66277 11.5908V11.5908ZM1.4589 1.457L4.66386 10.7158L5.95203 6.52916C5.99393 
                                      6.39269 6.06863 6.26857 6.16959 6.16764C6.27054 6.06671 6.39469 5.99205 6.53117 5.95018L10.7177 4.66202L1.4589 1.457Z" fill="#E3E3E3" />
                                        </svg>
                                        14km
                                    </span>
                                </div>
                                <div className="tour-button">
                                    <span>100+ tour</span>
                                    <div><i className="fas fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="item" style={{ color: '#DB9019' }}>
                            <div className="image" style={{ backgroundImage: 'url(./assets/images/landing/Hue.jpg)' }} />
                            <div className="bottom">
                                <h4 className="name">Huế</h4>
                                <div className="distance">
                                    <span>
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66277 11.5908C4.48055 11.5926 4.30246 11.5366 4.15409 11.4308C4.00572 11.325 3.8947 
                                      11.1749 3.83699 11.002L0.632135 1.74329C0.578412 1.58811 0.56944 1.42095 0.606246 1.26091C0.643052 
                                      1.10088 0.724149 0.95443 0.840266 0.838313C0.956383 0.722196 1.10283 0.641099 1.26287 0.604293C1.4229 
                                      0.567487 1.59007 0.576458 1.74524 0.630182L11.0039 3.8352C11.1783 3.89555 11.3291 4.00949 11.4349 4.16072C11.5406 
                                      4.31195 11.5958 4.49273 11.5926 4.67723C11.5894 4.86172 11.528 5.04048 11.4171 5.18796C11.3062 5.33543 11.1515 5.44408 
                                      10.9751 5.49835L6.78836 6.78646L5.5002 10.9731C5.44771 11.1505 5.33954 11.3063 5.19167 11.4175C5.0438 11.5287 4.86408 11.5894 
                                      4.67906 11.5906C4.67365 11.5907 4.66813 11.5908 4.66277 11.5908V11.5908ZM1.4589 1.457L4.66386 10.7158L5.95203 6.52916C5.99393 
                                      6.39269 6.06863 6.26857 6.16959 6.16764C6.27054 6.06671 6.39469 5.99205 6.53117 5.95018L10.7177 4.66202L1.4589 1.457Z" fill="#E3E3E3" />
                                        </svg>
                                        14km
                                    </span>
                                </div>
                                <div className="tour-button">
                                    <span>100+ tour</span>
                                    <div><i className="fas fa-arrow-right" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
