import React from 'react';

export const Tour3 = () => {
    return (
        <div class="tour-sumup container wide2">
            <div className="tour-img" style={{ backgroundImage: 'url(/assets/images/specific-tour/content1.png)' }}>
            </div>
            <div className="overview-tour">
                <div className="rating">
                    <span><i className="fas fa-star" /></span>
                    <span className="value">5.0</span>
                    <span className="rating-quality">(155 ratings)</span>
                </div>
                <h1 className="heading">TOUR DU LỊCH: ĐỒI CHÈ SƠN LA</h1>
                <div className="detail">
                    <p>Mã tour: <span>71234</span></p>
                    <p>Khởi hành: <span>12/11/2021</span></p>
                    <p>Thời gian: <span>3 ngày, 2 đêm</span></p>
                    <p>Phương tiện: <span>Đường bộ</span></p>
                    <p>Nơi khởi hành: <span>TP. Hà Nội</span></p>
                    <p>Số chỗ còn lại: <span>30</span></p>
                </div>
            </div>
        </div>

    );
};
