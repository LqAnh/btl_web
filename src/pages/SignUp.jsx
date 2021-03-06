/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const [check, setCheck] = useState(false)

    const [username, setUsername] = useState('')
    const [nationality, setNationality] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confimPassword, setConfimPassword] = useState('')
    const [err, setErr] = useState([])
    const [viewPass, setViewPass] = useState(false)
    const history = useHistory()
    const user = User.getUser()
    useEffect(() => {
        if (user) {
            return history.push('/')
        }
        setCheck(false)

    }, [history, user])
    useEffect(() => {
        setErr(err)
        console.log(err);
    }, [err, setErr])
    const submit = () => {
        setCheck(true)
        const data = {
            username,
            nationality,
            phone,
            address,
            city,
            email,
            password,
            confimPassword
        }
        if (password !== confimPassword) {
            setCheck(false)

            setErr(['password is wrong!'])

            return
        }
        if (username === '' || nationality === '' || phone === '' || address === '' || city === '' || email === '' || password === '' || confimPassword === '') {
            setCheck(false)
            setErr(['input is not empty!'])

            return
        }
        if (email.indexOf('@') < 0) {
            setCheck(false)
            setErr(['Email invalidate'])
            return
        }
        service.register(data).then(() => {
            setCheck(false)
            return history.push('/susuccess')
        }).catch((er) => {
            setCheck(false)
            return alert('user already exists')
        })
    }
    console.log(err);


    return (
        <ClienLayout check={check}>
            {
                err.map((value, key) => {
                    return (
                        <div className="alert alert-danger" key={key}>
                            <div className="message">
                                <strong>
                                    {value}
                                </strong>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <div className="padding" style={{ position: 'relative' }} />




                <div className="sign-up-form">
                    <h4>
                        Ch??o m???ng b???n ?????n v???i
                    </h4>
                    <h3>Vitra</h3>
                    <div className="form-container">
                        <div className="button-wrapper">
                            <Link to="/login"><div className="valid-btn ">????ng nh???p</div></Link>
                            <Link to="/signup"><div className="valid-btn active">????ng k??</div></Link>

                        </div>
                        <div className="input-wrapper">
                            <div className="item">
                                <div className="input-name">T??n ????ng nh???p</div>
                                <div>
                                    <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder="T??n ????ng nh???p" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Qu???c t???ch</div>
                                <div>
                                    <input onChange={(event) => setNationality(event.target.value)} type="text" placeholder="Vi???t Nam" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">?????a ch???</div>
                                <div>
                                    <input onChange={(event) => setAddress(event.target.value)} type="text" placeholder="..." />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Th??nh Ph???</div>
                                <div>
                                    <input onChange={(event) => setCity(event.target.value)} type="text" placeholder="H?? N???i" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">S??? ??i???n tho???i</div>
                                <div>
                                    <input onChange={(event) => setPhone(event.target.value)} type="text" placeholder="S??? ??i???n tho???i" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Email</div>
                                <div>
                                    <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">M???t kh???u</div>
                                <div>
                                    <input onChange={(event) => setPassword(event.target.value)} type={viewPass ? 'text' : 'password'} placeholder="M???t kh???u" className="no-radius-right" />
                                    <div className="display-pwd" onClick={() => setViewPass(!viewPass)}>
                                        <i className="far fa-eye-slash" />
                                        {/* <i className="far fa-eye"></i> */}
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="input-name">Nh???c l???i m???t kh???u</div>
                                <div>
                                    <input onChange={(event) => setConfimPassword(event.target.value)} type={viewPass ? 'text' : 'password'} placeholder="M???t kh???u" className="no-radius-right" />
                                    <div className="display-pwd" onClick={() => setViewPass(!viewPass)}>
                                        <i className="far fa-eye-slash" />
                                        {/* <i className="far fa-eye"></i> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style={{ border: 'none' }} onClick={submit} className="valid-btn active">????ng k??
                            <img src="./assets/images/booking-step/arrow-right-icon.png" />
                        </button>
                    </div>
                </div>
            </div>

        </ClienLayout>
    );
};

export default SignUp;