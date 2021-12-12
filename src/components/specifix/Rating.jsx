/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../ultis/checkUser';
import RatingDetail from './RatingDetail';

export const Rating = ({ rate }) => {
    // console.log("rating inside", rate)
    //const user = User.getUser()
    return (
        rate ?
            <div className="user-rating container">
                {/* {
                // !user 
                // ? 
                <div className="recommend-rating">
                    <h1 className="heading">Để lại đánh giá của bạn</h1>
                    <p>Hãy <Link to="/login">đăng nhập</Link> để có thể đánh giá</p>
                </div>
                // :
                // null
            } */}
                <div className="row">

                    {/* <div className="col-6">
                        <RatingDetail />
                    </div>
                    <div className="col-6">
                        <RatingDetail />
                    </div>
                    <div className="col-6">
                        <RatingDetail />
                    </div>
                    <div className="col-6">
                        <RatingDetail />
                    </div> */}

                    {
                        rate.map((value, key) => {
                            return (
                                <div className="col-6">
                                    <RatingDetail detailRate={value} />
                                </div>
                            )
                        })


                    }


                </div>
            </div>
            :
            null
    );
};
