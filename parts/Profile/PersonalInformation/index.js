import React, { useEffect, useState } from 'react'
import style from './personalInfo.module.css'
import axios from 'axios';
import Link from 'next/link'

function PersonalInfo() {
    const [user, setUser] = useState([])
    const [disabled, setDisabled] = useState(true);

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
                // console.log(res.data.data[0].image);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <div className={style['card-personal']}>
            <h6>Personal Information</h6>
            <p>We got your personal information from the sign <br /> up proccess. If you want to make changes on<br /> your information, contact our support.</p>

            <form className={[["mt-5"], style["form-aside"]].join(" ")}>
                <div className={style['form-group']}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        name="firstname"
                        id="firstname"
                        placeholder="Enter your username"
                        value={user.firstname}
                        disabled={disabled}
                    // onChange={handleFormChange}
                    />
                </div>
                <div className={style['form-group']}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        value={user.lastname}
                        disabled={disabled}
                        name="lastname"
                        id="lastname"
                        placeholder="Enter your username"
                    // onChange={handleFormChange}
                    />
                </div>
                <div className={style['form-group']}>
                    <label htmlFor="email">Verified E-mail</label>
                    <input
                        type="text"
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        value={user.email}
                        disabled={disabled}
                        name="email"
                        id="email"
                        placeholder="Enter your username"
                    // onChange={handleFormChange}
                    />
                </div>
                <div className={style['form-group']}>
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <div className="d-flex">
                        <p>{user.phoneNumber}</p>
                        <Link href="/profile/add-phone-number">
                            <a className={style.manage}>Manage</a>
                        </Link>
                    </div>
                </div>
            </form>

        </div>

    )
}

export default PersonalInfo
