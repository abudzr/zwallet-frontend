import { React, useState } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../../../../../styles/pin.module.css'
import InputPin from "react-pin-input";
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Pin() {
    const { query } = useRouter();
    console.log(query.email);
    const router = useRouter();
    const [data, setData] = useState(null);

    const handlePinChange = (value) => {
        setData(value);
    };

    const handleCreatePin = (event) => {
        event.preventDefault();
        const url = `${process.env.api}/users/new/create-pin/?email=${query.email}`
        console.log(url);
        axios.put(url, {
            pin: data
        })
            .then((res) => {
                router.push("/auth/signin")
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
            <aside className={[["m-5"], style["auth-pin"]].join(" ")}>
                <p className={style['title-aside']}>Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN <br />That You Created Yourself.</p>
                <p className={style['subtitle-aside']}>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
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

                <button
                    type="submit"
                    className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
                    onClick={handleCreatePin}
                >
                    Confirm
                    </button>


            </aside>
        </main >
    );
}
