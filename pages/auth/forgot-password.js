import { React, useState } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../../styles/reset.module.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function Pin() {
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
    });


    const handleFormChange = (event) => {
        const dataNew = {
            ...data,
        };
        dataNew[event.target.name] = event.target.value;
        console.log(dataNew);
        setData(dataNew);
    };

    const handleForgot = (event) => {
        event.preventDefault();
        axios
            .post(`${process.env.api}/users/auth/forgot-password`, data)
            .then(res => {
                Swal.fire("Success", res.data.message, "success");
                router.push('/auth/signin')
            })
            .catch(err => {
                console.log(err);
                Swal.fire("Error", "Reset Password Failed", "error");

            })
    }

    return (
        <main className={style['main-pin']}>

            <section className={style['auth-pins']}>
                <div className="container">
                    <h2 className={[["pt-5"], ["ml-5"], style["title-pin"]].join(" ")}>Zwallet</h2>
                    <div className={[["d-flex"], style["image-pin"]].join(" ")}>
                        <img
                            className={style['bgWave']}
                            src="/images/vector4.png"
                            alt="Picture of the author"
                        />
                        <img
                            src="/images/Groupphone.png"
                            alt="Picture of the author"
                            width={512.51338475284683}
                            height={536.4722634749991}
                        />
                    </div>
                    <div className={style['bottom-section']}>
                        <p className={style['title-bottom-section']}>App that Covering Banking Needs.</p>
                        <p className={style['subtitle-bottom-section']}>Zwallet is an application that focussing in banking needs for all users
                        in the world. Always updated and always following world trends.
                        5000+ users registered in Zwallet everyday with worldwide
                users coverage.</p>
                    </div>
                </div>
            </section>
            <aside className={style["auth-pin"]}>
                <p className={style['title-aside']}>Did You Forgot Your Password?
                Don’t Worry, You Can Reset Your
Password In a Minutes.</p>
                <p className={style['subtitle-aside']}>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>

                {/* mobile */}
                <h2 className={style['title-aside-mobile']}>Reset Password</h2>
                <p className={style['subtitle-aside-mobile']}>Enter your Zwallet e-mail so we can send
you a password reset link.</p>
                {/* end mobile */}


                <form className={[["mt-5"], style["form-aside"]].join(" ")}>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faEnvelope} className={style.iconReset} />
                        <input
                            type="email"
                            className={[["form-control mt-1"], style["form-control"]].join(
                                " "
                            )}
                            name="email"
                            id="email"
                            placeholder="Enter your e-mail"
                            onChange={handleFormChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
                        onClick={handleForgot}
                    >
                        Confirm
                    </button>

                </form>

            </aside>
        </main >
    );
}
