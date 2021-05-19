import { React, useState } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../../../../../styles/pin.module.css'
import InputPin from "react-pin-input";
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Pin() {
    const { query } = useRouter();
    const router = useRouter();
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false)

    const handlePinChange = (value) => {
        setData(value);
    };

    const handleLogin = () => {
        router.push("/auth/signin")
    }



    const handleCreatePin = (event) => {
        event.preventDefault();
        const url = `${process.env.api}/users/new/create-pin/?email=${query.email}`
        // console.log(url);
        axios.put(url, {
            pin: data
        })
            .then((res) => {
                setShow(true)
                // router.push("/auth/signin")
                Swal.fire("Success", "Create Pin Success!", "success");

            }, (err) => {
                if (err) {
                    Swal.fire(" ERROR!!!", "Create pin Failed!", "error");
                }
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

                {show === false && (
                    <>
                        <p className={style['title-aside']}>Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN <br />That You Created Yourself.</p>
                        <p className={style['subtitle-aside']}>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
                        {/* mobile */}
                        <h2 className={style['title-aside-mobile']}>Create Security PIN</h2>
                        <p className={style['subtitle-aside-mobile']}>Create a PIN that’s contain 6 digits number for security purpose in Zwallet.</p>
                        {/* end mobile */}

                        <div className={style['input-pin']}>
                            <InputPin
                                length={6}
                                secret
                                onChange={handlePinChange}
                                initialValue=""
                                type="numeric"
                                inputMode="number"
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                focus={true}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className={data === null ? [["mt-5 btn"], style["btn-auth"]].join(" ") : [["mt-5 btn"], style["btn-auth-active"]].join(" ")}
                                onClick={handleCreatePin}
                                disabled={data && data.length !== 6 ? true : false}
                            >
                                Confirm
                        </button>
                        </div>
                    </>
                )}

                {show === true && (
                    <>
                        <img
                            className={style.success}
                            src="/images/success.png"
                            alt="Picture success"
                        />
                        <p className={style['title-aside']}>Your PIN Was Successfully Created</p>
                        <p className={style['subtitle-aside']}>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                        {/* mobile */}
                        <h2 className={style['title-aside-mobile']}>PIN Successfully Created</h2>
                        <p className={style['subtitle-aside-mobile']}>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                        {/* end mobile */}


                        <div className="d-flex justify-content-center">

                            <button
                                type="submit"
                                className={[["mt-5 btn"], style["btn-auths"]].join(" ")}
                                onClick={handleLogin}
                            >
                                Login Now
                        </button>
                        </div>
                    </>
                )}

            </aside>
        </main >
    );
}
