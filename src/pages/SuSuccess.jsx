/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Bre, StepBre, UserInfo } from '../components/common';
import ClienLayout from '../layouts/ClienLayout';

const Success = () => {
    return (
        <ClienLayout>
            {/* <Bre /> */}
            {/* <StepBre /> */}
            <div className="user-informed">
                <span><img src="./assets/images/booking-step/check-icon.png" /></span>
                <h3>Đăng ký thành công</h3>
                <br />
                <br />
                {/* <p>Nhân viên của VITRA sẽ liên hệ với bạn sau ít phút nữa</p>
                <h3>Cảm ơn bạn đã tin tưởng VITRA</h3>
                <h3>Chúc bạn sẽ có một chuyến đi đáng nhớ</h3> */}
                <Link to="/login"><h3 style={{ color: '#32bea6' }}>Đi đến trang đăng nhập</h3></Link>
                <img src="./assets/images/booking-step/people-icon.png" />
            </div>
        </ClienLayout>
    );
};

export default Success;