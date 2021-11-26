/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export const Bre = () => {
    return (
        <div className="breadcrumb container wide2">
            <a href="#" className="prev-page">
                Trang chủ
                <i className="fas fa-chevron-right" />
            </a>
            <a href="#" className="prev-page">
                Tour chụp ảnh
                <i className="fas fa-chevron-right" />
            </a>
            <span className="current">
                Đồi chè Sơn La
            </span>
        </div>

    );
};
