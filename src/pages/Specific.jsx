import React from 'react';
import { Bre } from '../components/common';
import { BookingOverlay, InfoNotice, Rating, Schedule, TourImg, TourInfo } from '../components/specifix';
import ClienLayout from '../layouts/ClienLayout';

const Specific = () => {
    return (
        <ClienLayout>
            <Bre />
            <TourImg />
            <TourInfo />
            <Schedule />
            <Rating />
            <InfoNotice />
            <BookingOverlay />
        </ClienLayout>
    );
};

export default Specific;