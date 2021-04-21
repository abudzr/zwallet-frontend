import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from '../Button'
import style from '../../../styles/navbar.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
    const [user, setUser] = useState([])
    const [image, setImage] = useState()
    const router = useRouter()
    const handleLogin = () => {
        router.push('/auth/signin')
    }

    const handleSignUp = () => {
        router.push('/auth/signup')
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
                console.log(res.data.data[0].image);
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

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href="/">
                        <a className={style['navbar-brand']} >Zwallet</a>
                    </Link>
                    <div className="d-flex ">
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
                    <a className={style['navbar-brand']} >Zwallet</a>
                </Link >
                <div className="d-flex ">
                    {image ? (
                        <img
                            className={style["profile-img"]}
                            src={`http://localhost:8080/${image}`}
                            alt="ImgUser"
                        />
                    ) : (
                        ""
                    )}
                    <div className={style['name-phone']}>
                        {user ? (
                            <p className={style['navbar-name']}>{user.firstname} {user.lastname}</p>
                        ) : (
                            ""
                        )}
                        {user ? (
                            <p className={style['navbar-phone']}>{user.phoneNumber}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <FontAwesomeIcon className={style['icon-bell']} icon={faBell} />
                </div>
            </div >
        </nav >
    );
}

export default Navbar