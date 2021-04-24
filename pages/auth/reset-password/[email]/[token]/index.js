import { React, useState } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../../../../../styles/resetpass.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ResetPassword() {
    const { query } = useRouter();
    // console.log(query.email);
    const router = useRouter();
    const [data, setData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [isPasswordShow, setisPasswordShow] = useState(false)
    const [isPasswordShow2, setisPasswordShow2] = useState(false)


    const tooglePasswordVisibility = () => {
        setisPasswordShow(!isPasswordShow)
    }
    const tooglePasswordVisibility2 = () => {
        setisPasswordShow2(!isPasswordShow2)
    }

    const handleFormChange = (event) => {
        const dataNew = {
            ...data,
        };
        dataNew[event.target.name] = event.target.value;
        // console.log(dataNew);
        setData(dataNew);
    };


    const handleCreateReset = (event) => {
        event.preventDefault();
        const url = `${process.env.api}/users/auth/reset-password/new?email=${query.email}&token=${query.token}`
        // console.log(url);
        axios.put(url, {
            password: data.password,
            confirmPassword: data.confirmPassword
        })
            .then((res) => {
                router.push("/auth/signin")
                Swal.fire("Success", res.data.message, "success");

            }, (err) => {
                if (err) {
                    Swal.fire(" ERROR!!!", "Reset Password Failed!", "error");
                }
            })
    }

    return (
        <main className={style['main-reset']}>

            <section className={style['auth-resets']}>
                <div className="container">
                    <h2 className={[["pt-5"], ["ml-5"], style["title-reset"]].join(" ")}>Zwallet</h2>
                    <div className={[["d-flex"], style["image-reset"]].join(" ")}>
                        <img
                            className={style['bgWave']}
                            src="/images/vector4.png"
                            alt="Picture of the author"
                        />
                        <Image
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
            <aside className={[["m-5"], style["auth-reset"]].join(" ")}>
                <p className={style['title-aside']}>Did You Forgot Your Password?<br />
Don’t Worry, You Can Reset Your<br />
Password In a Minutes.</p>
                <p className={style['subtitle-aside']}>Now you can create a new password for your Zwallet<br /> account. Type your password twice so we can confirm your<br /> new passsword.</p>
                <form>
                    <div className="form-group mt-5">
                        <FontAwesomeIcon icon={faLock} className={style.iconLock} />
                        <input
                            type={(isPasswordShow) ? "text" : "password"}
                            className={[["form-control mt-1"], style["form-control"]].join(
                                " "
                            )}
                            name="password"
                            id="password"
                            placeholder="Create new password"
                            onChange={handleFormChange}
                        />
                        <FontAwesomeIcon icon={isPasswordShow ? faEye : faEyeSlash} className={style.iconPass} onClick={tooglePasswordVisibility} />
                    </div>
                    <div className="form-group mt-5">
                        <FontAwesomeIcon icon={faLock} className={style.iconLock2} />
                        <input
                            type={(isPasswordShow2) ? "text" : "password"}
                            className={[["form-control mt-1"], style["form-control"]].join(
                                " "
                            )}
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Create new password"
                            onChange={handleFormChange}
                        />
                        <FontAwesomeIcon icon={isPasswordShow2 ? faEye : faEyeSlash} className={style.iconPass2} onClick={tooglePasswordVisibility2} />
                    </div>
                </form>



                <button
                    type="submit"
                    className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
                    onClick={handleCreateReset}
                >
                    Reset Password
                    </button>
            </aside>
        </main >
    );
}
