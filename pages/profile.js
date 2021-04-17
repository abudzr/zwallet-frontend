import React from 'react'
import Sidebar from '../components/module/Sidebar'
import style from '../styles/profile.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Button from '../components/module/Button'
import PersonalInfo from '../parts/Profile/PersonalInformation'

function Profile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <Sidebar />
                </div>
                <div className="col-lg-8">
                    {/* <PersonalInfo /> */}
                    <div className={style['card-profile']}>
                        <div className={style['image-user']}>
                            <Image
                                src="/images/user.png"
                                alt="Picture feature"
                                width={80}
                                height={80}
                            />
                        </div>
                        <h5>Robert Chandler</h5>
                        <p>082312428318</p>
                        <div className="d-flex">
                            <Button title="Personal Information" btn="btn-profile">
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
                            <Button title="Logout" btn="btn-profile">
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
