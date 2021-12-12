/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { convetVND } from '../../ultis/format';
import { imgs } from '../../ultis/randomImg';
import { service } from '../../services/service';
export const Tour1 = ({ tour }) => {
    console.log("tour1", tour.tour_id);
    const [rate, setRate] = useState([]);
    const [avg, setAvg] = useState(0.0);

    useEffect(() => {
        service.getRatingTour(tour.tour_id).then((data) => {
            setRate(data)
            let sum = 0
            for (let i = 0; i < rate.length; i++) {
                sum += rate[i].rating;
                setAvg(sum / rate.length)

            }
        })
    }, [tour.tour_id, rate])

    return (
        <div className="item">
            {/* <Link to={"/specific/" + tour.tour_id}> */}
            <div className="category-img" style={{ backgroundImage: `url(${tour.tour_bg_img})` }} />
            {/* <div className="category-info">
                    <img src="./assets/images/landing/icon6.png" />
                    <div className="location">{tour.departure_place}</div>
                    <div className="cost-info">2N / 1Đ</div>
                </div> */}
            <div className="category-title">
                <p>{tour.tour_title}</p>
            </div>
            {
                rate ?
                    <div className="rating">
                        <span><i className="fas fa-star" /></span>
                        <span className="value">{avg}.0</span>
                        <span className="rating-quality">({rate.length} ratings)</span>
                    </div>
                    :
                    null
            }

            <span className="cost">{convetVND(tour.adult_price)}đ</span>
            {/* </Link> */}

        </div>

    );
};
