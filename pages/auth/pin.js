import { React, useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import style from '../../styles/pin.module.css'
// import handphone from '../../assets/png-phone.png'
// import hanphone2 from '../../assets/png-phone2.png'

export default function Pin() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleFormChange = (event) => {
        const dataNew = {
            ...data,
        };
        dataNew[event.target.name] = event.target.value;
        setData(dataNew);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(pin(data))
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
            <aside className={[["m-5"], style["auth-pin"]].join(" ")}>
                <p className={style['title-aside']}>Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN <br />That You Created Yourself.</p>
                <p className={style['subtitle-aside']}>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>

                <form className={[["mt-5"], style["form-aside"]].join(" ")}>
                    <div className="d-flex">

                        <div className="form-group">
                            <input
                                type="text"
                                className={[["form-control mt-1"], style["form-control"]].join(" ")}
                                name="pin"
                                id="pin"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={[["form-control mt-1"], style["form-control"]].join(
                                    " "
                                )}
                                name="pin"
                                id="pin"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={[["form-control mt-1"], style["form-control"]].join(
                                    " "
                                )}
                                name="pin"
                                id="pin"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={[["form-control mt-1"], style["form-control"]].join(
                                    " "
                                )}
                                name="pin"
                                id="pin"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={[["form-control mt-1"], style["form-control"]].join(
                                    " "
                                )}
                                name="pin"
                                id="pin"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={[["form-control mt-1"], style["form-control"]].join(
                                    " "
                                )}
                                name="pin"
                                id="pin"
                                onChange={handleFormChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={[["mt-5 btn"], style["btn-auth"]].join(" ")}
                        onClick=""
                    >
                        Confirm
                    </button>

                </form>

            </aside>
        </main >
    );
}
