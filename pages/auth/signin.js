import { React, useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../../styles/signin.module.css'
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Signin() {
    const router = useRouter()
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [isPasswordShow, setisPasswordShow] = useState(false)
    const [checkPin, setCheckPin] = useState(null)

    const tooglePasswordVisibility = () => {
        setisPasswordShow(!isPasswordShow)
    }
    const handleFormChange = (event) => {
        const dataNew = { ...data };
        dataNew[event.target.name] = event.target.value;
        setData(dataNew);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const url = axios.post(`${process.env.api}/users/auth/login`, data)
            .then(res => {
                localStorage.setItem("id", res.data.data.id)
                // localStorage.setItem("pin", res.data.data.pin)
                localStorage.setItem("token", res.data.data.token)
                if (res.data.data.role == 2) {
                    router.push('/home')
                }
            })
            .catch((err) => {
                Swal.fire("Something Error!", err, "error");
            });
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            router.push("/home");
        }
    }, []);

    return (
        <main className={style['main-login']}>

            <section className={style['auth-logins']}>
                <div className="container">
                    <h2 className={[["pt-5"], ["ml-5"], style["title-login"]].join(" ")}>Zwallet</h2>
                    <div className={[["d-flex"], style["image-login"]].join(" ")}>
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
            <aside className={style["auth-login"]}>
                <p className={style['title-aside']}>Start Accessing Banking Needs
                With All Devices and All Platforms
                With 30.000+ Users</p>
                <p className={style['subtitle-aside']}>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>

                {/* mobile */}
                <h2 className={style['title-aside-mobile']}>Login</h2>
                <p className={style['subtitle-aside-mobile']}>Login to your existing account to access
all the features in Zwallet.</p>
                {/* end mobile */}

                <form className={[["mt-5"], style["form-aside"]].join(" ")}>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faEnvelope} className={data.email === "" ? style.iconEmail : style["iconLogin-active"]} />
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
                        <FontAwesomeIcon icon={faLock} className={data.password === "" ? style.iconPassword : style["iconLogin-active"]} />
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
                    <div className={style['forgot-pass']}>
                        <Link href="/auth/forgot-password">
                            <a>Forgot Password?</a>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"

                            className={data.email === "" && data.password === "" ? [["mt-5 btn"], style["btn-auth"]].join(" ") : [["mt-5 btn"], style["btn-auth-active"]].join(" ")}
                            disabled={data.email === "" && data.password === "" ? true : false}
                            onClick={handleLogin}
                        >
                            Login
                    </button>
                    </div>
                    <p className={style['dont-haveacc']}>Don???t have an account? Let???s
                        <Link href="/auth/signup">
                            <a> Sign Up</a>
                        </Link>
                    </p>

                </form>

            </aside>
        </main >
    );

}
