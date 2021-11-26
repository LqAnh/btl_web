/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BannerHero, Bre, Tour1, Tour2 } from '../components/common';
import UniquePoint from '../components/common/UniquePoint';
import ClienLayout from '../layouts/ClienLayout';

const TourLisst = () => {
    return (
        <ClienLayout>
            <Bre />
            <BannerHero />
            <div classname="tourlist-line2" />
            <div className="category tourlist-category container">
                <div className="heading">Tour Chụp ảnh</div>
                <div className="row">
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>
                    <a href="#" className="col-3">
                        <Tour1 />
                    </a>

                </div>
            </div>

            <div className="discover-pot container">
                <div className="heading">Khám phá những điểm đến yêu thích</div>
                <div className="row">
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    <div className="col-3">
                        <Tour2 />
                    </div>
                    
                </div>
            </div>
            <UniquePoint />



        </ClienLayout>
    );
};

export default TourLisst;