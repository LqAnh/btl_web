/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Header } from '../components/common';
import Scroll from '../Scroll';
import { User } from '../ultis/checkUser';
import { useHistory } from "react-router-dom";
import { service } from '../services/service';

const AdminLayout = ({ children, check = false }) => {
    const user = User.getUser()
    const history = useHistory()
    useEffect(() => {
        if (!user?.admin) {
            return history.push('/')
        }
        service.checkAdmin().then((data) => {
            if (data === "false") {
                User.logOut()
                return history.push('/')
            }
        }).catch(() => {
            User.logOut()
            return history.push('/login')
        })
    }, [])

    return (
        <div className=" container">
            <div className="loading" style={!check ? { display: 'none', zIndex: '99999999' } : null}>
                <h1 className="textloading"><div class="loader"></div></h1>

            </div>
            <Header />
            <Scroll />

            {children}


        </div>
    );
};

export default AdminLayout;