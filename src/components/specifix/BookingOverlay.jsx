import React from 'react';

export const BookingOverlay = () => {
    return (
        <div className="booking-overlay">
            <div className="tour-info">
                <h4>Tour du lịch: Đồi chè Sơn La</h4>
                <p>12/11/2021 | 3 ngày 2 đêm | Xe</p>
            </div>
            <div className="right">
                <div className="cost">
                    <h4>Giá 10,000,000 đ</h4>
                    <p>(1 khách)</p>
                </div>
                <button className="book-tour">Đặt ngay</button>
            </div>
            <span className="fas fa-times close-overlay" />
        </div>

    );
};
