import React from 'react';
import {Header, Footer} from '../components/common';

const ClienLayout = ({children}) => {
    return (
        <div className="container">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default ClienLayout;