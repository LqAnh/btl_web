/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const OverView = () => {
    return (
        <div className="trip-overview container wide2">
            <h1 className="heading">Tổng quan về chuyến đi</h1>
            <div className="row">
                <div className="col-8">
                    <div className="contact-info">
                        <h4>Thông tin liên lạc</h4>
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-6">
                                    <div className="item">
                                        <span>Họ và Tên<span className="required show">*</span></span>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Số điện thoại<span className="required show">*</span></span>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Email<span className="required show">*</span></span>
                                        <input type="email" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item">
                                        <span>Địa chỉ<span className="required show">*</span></span>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger">
                        <h3>Hành khách</h3>
                        <div className="row">
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Người lớn</h3>
                                        <span>&gt; 12 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <img src="./assets/images/booking-step/increase-icon.png" />
                                        <div>1</div>
                                        <img src="./assets/images/booking-step/decrease-icon.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Trẻ em</h3>
                                        <span>Từ 5-11 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <div><img src="./assets/images/booking-step/increase-icon.png" /></div>
                                        <div />
                                        <div><img src="./assets/images/booking-step/decrease-icon.png" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Trẻ nhỏ</h3>
                                        <span>&gt;Từ 2-4 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <div><img src="./assets/images/booking-step/increase-icon.png" /></div>
                                        <div>0</div>
                                        <div><img src="./assets/images/booking-step/decrease-icon.png" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item">
                                    <div className="object">
                                        <h3>Em bé</h3>
                                        <span>Từ 0-2 tuổi</span>
                                    </div>
                                    <div className="quantity">
                                        <div><img src="./assets/images/booking-step/increase-icon.png" /></div>
                                        <div>0</div>
                                        <div><img src="./assets/images/booking-step/decrease-icon.png" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger-info">
                        <h4>Thông tin hành khách</h4>
                        <span>Người lớn</span>
                        <div className="form">
                            <div className="name">
                                <div>Họ tên</div>
                                <input type="text" placeholder="Vui lòng nhập Họ Tên" />
                            </div>
                            <div className="sex">
                                <div>Giới tính</div>
                                <input type="text" placeholder="Giới tính" />
                            </div>
                            <div className="birth-date">
                                <div>Ngày sinh</div>
                                <div className="wrapper">
                                    <input type="text" placeholder="Ngày" />
                                    <input type="text" placeholder="Tháng" />
                                    <input type="text" placeholder="Năm" />
                                </div>
                            </div>
                            <div className="room">
                                <div>Phòng riêng</div>
                                <div>
                                    <input type="radio" />
                                    <p>0 đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="passenger-notice">
                        <h4>Lưu ý của khách hàng</h4>
                        <input type="text" placeholder="Vui lòng nhập ghi chú cho Vitra nếu có" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="trip-summary">
                        <h4>Tóm tắt chuyến đi</h4>
                        <span>Tour trọn gói</span>
                        <div className="tour-name">
                            <div className="image" style={{ backgroundImage: 'url(/assets/images/specific-tour/content1.png)' }} />
                            <h3>Tour du lịch: Đồi chè Sơn La</h3>
                        </div>
                        <div className="summary-form">
                            <div className="head">
                                <h3>Hành khách</h3>
                                <div className="number">
                                    <i className="fas fa-users" />
                                    <span>1</span>
                                </div>
                            </div>
                            <div className="body">
                                <h4>Người lớn</h4>
                                <span className="cost">1 x 10,000,000đ</span>
                            </div>
                            <div className="body">
                                <h4>Trẻ em</h4>
                                <span className="cost">0 x 5,000,000đ</span>
                            </div>
                            <div className="body">
                                <h4>Trẻ nhỏ</h4>
                                <span className="cost">0 x 0đ</span>
                            </div>
                            <div className="body">
                                <h4>Em bé</h4>
                                <span className="cost">0 x 0đ</span>
                            </div>
                            <div className="body">
                                <h4 className="text-bold">Phụ thu</h4>
                                <span className="cost">0đ</span>
                            </div>
                            <div className="total">
                                <h4>TỔNG CỘNG</h4>
                                <span>10,000,000đ</span>
                            </div>
                        </div>
                        <div className="book">
                            Đặt ngay
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
