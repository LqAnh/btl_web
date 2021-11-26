import React, { Component } from 'react';
import { BannerHero } from '../components/common';
import { Discover, TourWishList, UniquePoint, WishList } from '../components/home';
import ClienLayout from '../layouts/ClienLayout';

class Home extends Component {
    render() {
        return (
            <ClienLayout>
                <BannerHero />
                <WishList />
                <TourWishList />
                <Discover />

                <UniquePoint />
            </ClienLayout>
        );
    }
}

export default Home;