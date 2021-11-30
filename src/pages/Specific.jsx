
import { Bre } from '../components/common';
import { BookingOverlay, InfoNotice, Rating, Schedule, TourImg, TourInfo } from '../components/specifix';
import ClienLayout from '../layouts/ClienLayout';

import React, { Component } from 'react';
import { service } from '../services/service';

class Specific extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            tour: null,
            bre: []
        }
    }
    
    componentDidMount() {
        service.getDetailTour( this.state.id).then((payload) => {
                this.setState({
                    tour: payload,
                    bre: [ 'Chi Tiết Tour', payload.tour_title]
                });
        })
    }
    
    render() {

        return (
            <ClienLayout>
                <Bre bre={this.state.bre}/>
                <TourImg title = {this.state.tour?.tour_title}/>
                <TourInfo tour={this.state.tour}/>
                <Schedule />
                <Rating />
                <InfoNotice />
                <BookingOverlay />
            </ClienLayout>
        )
    }
}

export default Specific;
