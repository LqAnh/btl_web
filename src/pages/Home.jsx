import React, { useEffect, useState } from 'react';
import { BannerHero } from '../components/common';
import { Discover, TourWishList, UniquePoint, WishList } from '../components/home';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

const Home = () => {
    const [types, setTypes] = useState([])
    const [places, setPlaces] = useState([])
    
    useEffect(() => {
        service.getType().then(data => {
            setTypes(data)
        })
        service.getPlace().then((data) => {
            setPlaces(data)
        })
    },[])
    return (
        <ClienLayout>
            <BannerHero />
            <WishList places={places} />
            <TourWishList types={types}  />
            <Discover />

            <UniquePoint />
        </ClienLayout>
    );
}

export default Home;