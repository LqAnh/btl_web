import React, { useEffect, useState } from 'react';
import { Bre, SearchTour, Tour3 } from '../components/common';
import DiscoverPot from '../components/common/DiscoverPot';
import UniquePoint from '../components/common/UniquePoint';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

const BookedTour = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        service.getAllTour().then(data => {
            setTours(data)
        })
    },[])
    return (
        <ClienLayout>
            <Bre/>
            <SearchTour className = "search-tool forFavTour"/>
            <div className="tourlist-line2"></div>
            <div>
                <div className="tour-sumoup-wrapper container">
                    <h1 className="heading align-center for-contract">Tour đã đặt</h1>
                    <Tour3 />
                    <Tour3 />
                </div>
                <div className="tourlist-line2" />
                <div className="tour-sumoup-wrapper container">
                    <h1 className="heading align-center for-contract">Tour đã trải nghiệm</h1>
                    <Tour3 />
                    <Tour3 />
                </div>
            </div>
            <DiscoverPot tours={tours}/>
            <UniquePoint/>
        </ClienLayout>
    );
};

export default BookedTour;