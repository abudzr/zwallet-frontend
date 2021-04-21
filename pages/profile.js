import Sidebar from '../components/module/Sidebar'
import style from '../styles/profile.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Button from '../components/module/Button'
import PersonalInfo from '../parts/Profile/PersonalInformation'
import Layout from '../components/base/Layout'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'
import Navbar from '../components/module/Navbar'
import Footer from '../components/module/Footer'


function Profile() {
    const router = useRouter()
    const [user, setUser] = useState([])
    const [showPersonal, setShowPersonal] = useState(false);
    const [showMain, setShowMain] = useState(false);


    const handlelogout = () => {
        localStorage.clear('token');
        router.push('/')
    }
    const handleClickPersonal = () => {
        setShowPersonal(true)
        setShowMain(true)
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
                // setImage(res.data.data[0].image)
                console.log(res.data.data[0].image);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (

        <Layout title="Profile | Z-wallet" >
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        {showPersonal == true && (
                            <PersonalInfo />
                        )}

                        {showMain == false && (
                            <div className={style['card-profile']}>
                                <div className={style['image-user']}>
                                    <img
                                        src={`${process.env.api_img}${user.image}`}
                                        alt="Picture feature"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <h5>{user.firstname} {user.lastname}</h5>
                                <p>{user.phoneNumber}</p>
                                <div className="d-flex">
                                    <Button title="Personal Information" btn="btn-profile" onClick={handleClickPersonal}>
                                    </Button>
                                    <FontAwesomeIcon icon={faArrowRight} className={style.iconProfile} />
                                </div>
                                <div className="d-flex">
                                    <Button title="Change Password" btn="btn-profile">
                                    </Button>
                                    <FontAwesomeIcon icon={faArrowRight} className={style.iconProfile} />
                                </div>
                                <div className="d-flex">
                                    <Button title="Change PIN" btn="btn-profile">
                                    </Button>
                                    <FontAwesomeIcon icon={faArrowRight} className={style.iconProfile} />
                                </div>
                                <div className="d-flex">
                                    <Button title="Logout" btn="btn-profile" onClick={handlelogout}>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default Profile
