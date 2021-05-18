import { React, useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../../styles/signup.module.css'
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function Signup() {
    const { query } = useRouter();
    const router = useRouter();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        firstname: "Your Firstname",
        lastname: "Your Lastname",
    });
    const [isPasswordShow, setisPasswordShow] = useState(false)

    const tooglePasswordVisibility = () => {
        setisPasswordShow(!isPasswordShow)
    }

    const handleFormChange = (event) => {
        const dataNew = {
            ...data,
        };
        dataNew[event.target.name] = event.target.value;
        // console.log(dataNew);
        setData(dataNew);
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        // console.log(data);
        axios.post(`${process.env.api}/users/`, data)
            .then(res => {
                // console.log(res);
                Swal.fire("Success", res.data.message, "success");
                router.push('/auth/signin')
            })
            .catch(err => {
                console.log(err);
                Swal.fire("Error", "Sign Up Failed", "error");
            })
    }

    return (
        <main className={style['main-signup']}>

            <section className={style['auth-signups']}>
                <div className="container">
                    <h2 className={[["pt-5"], ["ml-5"], style["title-signup"]].join(" ")}>Zwallet</h2>
                    <div className={[["d-flex"], style["image-signup"]].join(" ")}>
                        <img
                            className={style['bgWave']}
                            src="/images/vector4.png"
                            alt="Picture primary phone"
                        />
                        <img
                            src="/images/Groupphone.png"
                            alt="Picture primary phone"
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
            <aside className={style["auth-signup"]}>

                <p className={style['title-aside']}>Start Accessing Banking Needs
                With All Devices and All Platforms
                With 30.000+ Users</p>
                <p className={style['subtitle-aside']}>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>

                {/* mobile */}
                <h2 className={style['title-aside-mobile']}>Sign Up</h2>
                <p className={style['subtitle-aside-mobile']}>Create your account to access Zwallet.</p>
                {/* end mobile */}

                <form className={[["mt-5"], style["form-aside"]].join(" ")}>
                    <div className="form-group ">
                        <FontAwesomeIcon icon={faUser} className={data.username === "" ? style.iconUsername : style["iconSignup-active"]} />
                        <input
                            type="text"
                            className={[["form-control mt-1"], style["form-control"]].join(
                                " "
                            )}
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="form-group mt-5">
                        <FontAwesomeIcon icon={faEnvelope} className={data.email === "" ? style.iconEmail : style["iconSignup-active"]} />
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
                    <div className="form-group mt-5">
                        <FontAwesomeIcon icon={faLock} className={data.password === "" ? style.iconPassword : style["iconSignup-active"]} />

                        <input
                            type={(isPasswordShow) ? "text" : "password"}
                            className={[["form-control mt-1"], style["form-control"]].join(
                                " "
                            )}
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            onChange={handleFormChange}
                        />
                        <FontAwesomeIcon icon={isPasswordShow ? faEye : faEyeSlash} className={style.iconPass} onClick={tooglePasswordVisibility} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className={data.email === "" && data.username === "" && data.password === "" ? [["mt-5 btn"], style["btn-auth"]].join(" ") : [["mt-5 btn"], style["btn-auth-active"]].join(" ")}
                            onClick={handleSignUp}
                            disabled={data.email === "" && data.username === "" && data.password === "" ? true : false}
                        >
                            Sign Up
                    </button>
                    </div>
                    <p className={style['dont-haveacc']}>Already have an account? Let’s
                        <Link href="/auth/signin">
                            <a> Login</a>
                        </Link>
                    </p>

                </form>
            </aside >
        </main >
    );
}
