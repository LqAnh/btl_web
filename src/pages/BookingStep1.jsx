import { OverView } from '../components/bookingStep1';
import { Bre, Tour3 } from '../components/common';
import ClienLayout from '../layouts/ClienLayout';

const BookingStep1 = () => {
    return (
        <ClienLayout >
            <Bre />
            <div className="step-breadcrumb breadcrumb">
                <span className="current">
                    1. Nhập thông tin
                </span>
                <span className="prev-page ">
                    <i className="fas fa-chevron-right" />
                    2. Xác nhận của bạn
                </span>
            </div>


            <Tour3 />
            <OverView />
        </ClienLayout>
    );
};

export default BookingStep1;