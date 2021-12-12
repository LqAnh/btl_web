
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
            bre: [],
            routes: [],
            rate: null,
            check: true
        }
    }

    componentDidMount() {
        Promise.all([
            service.getDetailTour(this.state.id),
            service.getRoute(this.state.id),
            service.getRatingTour(this.state.id)
        ]).then((payload) => {
            //console.log("rating", payload[2]);
            this.setState({
                check: false,
                tour: payload[0],
                bre: ['Chi Tiết Tour', payload[0].tour_title],
                routes: payload[1].sort(function (a, b) {
                    return a.step_number - b.step_number;
                }),
                rate: payload[2]
            });
        }).catch(er => {
            return alert('server error')
        })

    }

    render() {

        return (
            <ClienLayout check={this.state.check}>
                <Bre bre={this.state.bre} />
                <TourImg title={this.state.tour?.tour_title} id={this.state.id} imgBg={this.state.tour?.tour_bg_img} rate={this.state.rate} />
                <TourInfo tour={this.state.tour} />
                <Schedule routes={this.state.routes} />
                <Rating rate={this.state.rate} />
                <InfoNotice />
                <BookingOverlay tour={this.state.tour} />
            </ClienLayout>
        )
    }
}

export default Specific;
