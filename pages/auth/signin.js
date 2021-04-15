import { React, useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../../styles/signin.module.css'
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Signin() {
    const [data, setData] = useState({
        email: "",
        password: "",
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
        setData(dataNew);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(login(data))
    //         .then((res) => {
    //             Swal.fire({
    //                 title: "Success!",
    //                 text: res,
    //                 icon: "success",
    //                 confirmButtonText: "Ok",
    //                 confirmButtonColor: "#ffba33",
    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     history.push("/");
    //                 } else {
    //                     history.push("/");
    //                 }
    //             });
    //         })
    //         .catch((err) => {
    //             Swal.fire({
    //                 title: "Error!",
    //                 text: err,
    //                 icon: "error",
    //                 confirmButtonText: "Ok",
    //                 confirmButtonColor: "#6a4029",
    //             });
    //         });
    // };

    // const handleClickSignUp = () => {
    //     router.push("/auth/signup");
    // };

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
                        <Image
                            src="/images/phone2.png"
                            alt="Picture of the author"
                            width={278.51338475284683}
                            height={536.4722634749991}
                        />
                        <Image
                            src="/images/phone.png"
                            alt="Picture of the author"
                            width={278.51338475284683}
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
            <aside className={[["m-5"], style["auth-login"]].join(" ")}>
                <p className={style['title-aside']}>Start Accessing Banking Needs
                With All Devices and All Platforms
                With 30.000+ Users</p>
                <p className={style['subtitle-aside']}>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>

                <form className={[["mt-5"], style["form-aside"]].join(" ")}>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faEnvelope} className={style.iconLogin} />
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
                        <FontAwesomeIcon icon={faLock} className={style.iconLogin} />
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
                        <Link href="/forgot-password">
                            <a>Forgot Password?</a>
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
                        onClick=""
                    >
                        Login
                    </button>
                    <p className={style['dont-haveacc']}>Don’t have an account? Let’s
                        <Link href="/auth/signup">
                            <a> Sign Up</a>
                        </Link>
                    </p>

                </form>

            </aside>
        </main >
    );
}
