import React, { useEffect, useState } from 'react';
import { BannerHero } from '../components/common';
import { Discover, TourWishList, UniquePoint, WishList } from '../components/home';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

const Home = () => {
    const [tours, setTours] = useState([])
    const [types, setTypes] = useState([])
    const [placesShort, setPlacesShort] = useState([])
    const [placesLong, setPlacesLong] = useState([])
    const [check, setCheck] = useState(true)
    var dataPlaceRemove = []

    useEffect(() => {
        Promise.all([
            service.getAllTour(),
            service.getType(),
            service.getPlace()
        ]).then((data) => {
            console.log(data);
            setCheck(false)
            setPlacesLong(data[2].splice(6))
            setTours(data[0])
            setTypes(data[1])
            dataPlaceRemove = data[2].splice(6);
            setPlacesShort(data[2])
        })

    }, [])
    return (
        <ClienLayout check={check}>
            <BannerHero />
            <WishList places={placesShort} />
            <TourWishList typs={types} />
            <Discover tours={tours} places={placesLong} types={types} />

            <UniquePoint />
        </ClienLayout>
    );
}

export default Home;