/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header tourlist container wide">
                <Link to="/" className="logo">
                    <img src="./assets/images/landing/cloud.png" className="logo-img" />
                    <img src="./assets/images/landing/vitra.png" className="logo-text" />
                </Link>
                <ul className="nav">
                    <li className="item">
                        <a >
                            <img src="./assets/images/landing/heart-icon.png" />
                            <span>Yêu thích</span>
                        </a>
                    </li>
                    <li className="item">
                        <a >
                            <img src="./assets/images/landing/list-icon.png" />
                            <span>Tour đã đặt</span>
                        </a>
                    </li>
                    <li className="item">
                        <a >
                            <div className="img" style={{ backgroundImage: 'url(./assets/images/landing/account-avatar.jpg)' }}>
                            </div>
                            <span>Hoàng Tử Gió</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );
};
