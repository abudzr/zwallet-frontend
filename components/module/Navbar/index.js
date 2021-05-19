import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../Button'
import style from '../../../styles/navbar.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import { faPlus, faBell, faArrowUp, faUser, faTachometerAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Navbar() {
    const [user, setUser] = useState([])
    const [image, setImage] = useState()
    const [sidebar, setSidebar] = useState(false)

    const router = useRouter()
    const handleLogin = () => {
        router.push('/auth/signin')
    }

    const handleClickSidebar = () => {
        setSidebar(!sidebar)
    }
    const handleSignUp = () => {
        router.push('/auth/signup')
    }
    const handlelogout = () => {
        localStorage.clear('token');
        router.push('/')

    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        const url = `${process.env.api}/users/find-one`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                const data = res.data.data[0]
                setUser(data)
                setImage(res.data.data[0].image)
                // console.log(res.data.data[0].image);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    let isAuthenticated;
    if (typeof window !== "undefined") {
        isAuthenticated = localStorage.getItem("token");
    }
    if (!isAuthenticated) {

        return (

            <nav className="navbar">
                <div className="container">
                    <Link href="/">
                        <a className={style['navbar-brand']} >Zwallet</a>
                    </Link>
                    <div className="d-flex btn-landing ">
                        <div className="mr-5 pt-5">
                            <Button
                                title="Login" btn="btn-login" onClick={handleLogin}
                            />
                        </div>
                        <div className="pt-5 mr-5">
                            <Button
                                title="Sign Up" btn="btn-signup" onClick={handleSignUp}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    return (
        <nav className={[["navbar"], style["navbar-login"]].join(" ")}>
            <div className="container">
                <Link Link href="/" >
                    <a className={style['navbar-brands']} >Zwallet</a>
                </Link >
                <div className="d-flex ">
                    {image ? (
                        <img
                            className={style["profile-img"]}
                            src={`${process.env.api_img}${image}`}
                            alt="ImgUser"
                        />
                    ) : (
                        ""
                    )}
                    <div className={style['name-phone']}>
                        {user ? (
                            <p className={style['navbar-name']} onClick={handleClickSidebar}>
                                {
                                    user.firstname == "Your Firstname" && user.lastname == "Your Lastname" ? "Your Name"
                                        : `${user.firstname} ${user.lastname} `
                                }
                            </p>
                        ) : (
                            ""
                        )}
                        {user ? (
                            <p className={style['navbar-phone']}>{user.phoneNumber}</p>
                        ) : (
                            ""
                        )}
                        {sidebar === true &&
                            <div className={style.sidebar}>
                                <div className="container">
                                    <div className="row flex flex-wrap">
                                        <div className={[["mb-5"], style["icon-sidebar"]].join(" ")}>
                                            <FontAwesomeIcon icon={faTachometerAlt} className={style.iconSidebar} />
                                            <Link href="/home">
                                                <a className={style['dashboard']} >Dashboard</a>
                                            </Link>
                                        </div>
                                        <div className="mb-5">
                                            <FontAwesomeIcon icon={faArrowUp} className={style.iconSidebar} />
                                            <Link href="/transfer">
                                                <a className={style['Transfer']} >Transfer</a>
                                            </Link>
                                        </div>
                                        <div className="mb-5">
                                            <FontAwesomeIcon icon={faPlus} className={style.iconSidebar} />
                                            <Link href="/topup">
                                                <a className={style['top-up']} >Top Up</a>
                                            </Link>
                                        </div>
                                        <div className="mb-5">
                                            <FontAwesomeIcon icon={faUser} className={style.iconSidebar} />
                                            <Link href="/profile">
                                                <a className={style['profile']} >Profile</a>
                                            </Link>
                                        </div>
                                        <div className={[["mb-5"], style["icon-logout"]].join(" ")}>
                                            <FontAwesomeIcon icon={faSignOutAlt} className={style.iconSidebar} />
                                            <Link href="#"  >
                                                <a className={style['log-out']} onClick={handlelogout} >Logout</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <FontAwesomeIcon className={style['icon-bell']} icon={faBell} />
                </div>
            </div >
        </nav >
    );
}

export default Navbar