import { React, useState, useEffect } from "react";
import style from '../../../styles/changepass.module.css'
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../components/module/Button';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

function ChangePassword() {
    const router = useRouter();

    const [data, setData] = useState({
        currentPassword: "",
        password: "",
        confirmPassword: "",
    });
    const [isPasswordShow, setisPasswordShow] = useState(false)
    const [isPasswordShow2, setisPasswordShow2] = useState(false)
    const [isPasswordShow3, setisPasswordShow3] = useState(false)

    const tooglePasswordVisibility = () => {
        setisPasswordShow(!isPasswordShow)
    }
    const tooglePasswordVisibility2 = () => {
        setisPasswordShow2(!isPasswordShow2)
    }
    const tooglePasswordVisibility3 = () => {
        setisPasswordShow3(!isPasswordShow3)
    }

    const handleFormChange = (event) => {
        const dataNew = {
            ...data,
        };
        dataNew[event.target.name] = event.target.value;
        // console.log(dataNew);
        setData(dataNew);
    };

    // let token;
    // if (typeof window !== "undefined") {
    //     token = localStorage.getItem("token");
    // }
    const handleUpdate = (event) => {
        event.preventDefault();
        const id = localStorage.getItem('id')
        const url = `${process.env.api}/users/edit-password/${id}`
        // console.log(url);
        axios.put(url, {
            currentPassword: data.currentPassword,
            password: data.password,
            confirmPassword: data.confirmPassword
        })
            .then((res) => {
                router.push("/profile")
                // this.getPostAPI()

                Swal.fire("Success", "Update Password Success!", "success");

            }, (err) => {
                if (err) {
                    Swal.fire(" ERROR!!!", "Update Password Failed!", "error");
                }
            })
    }

    // useEffect(() => { 
    //     const token = localStorage.getItem('token')
    //     const id = localStorage.getItem('id')
    //     const url = `${process.env.api}/users/edit-password/${id}`;
    //     axios.get(url, {
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }
    //     })
    //         .then((res) => {
    //             const data = res.data.data[0].password
    //             // setData(data)
    //             // setImage(res.data.data[0].image)
    //             console.log(res.data.data[0]);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, []);
    http://localhost:8080/api/v1/users/edit-password/7

    return (

        <div className={style['card-profile']}>
            <h6>Change Password</h6>
            <p>You must enter your current password and then<br /> type your new password twice.</p>
            <form>
                <div className="form-group mt-5">
                    <FontAwesomeIcon icon={faLock} className={style.iconLock} />
                    <input
                        type={(isPasswordShow) ? "text" : "password"}
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        name="currentPassword"
                        id="currentPassword"
                        placeholder="Current password"
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
                        name="password"
                        id="password"
                        placeholder="New password"
                        onChange={handleFormChange}
                    />
                    <FontAwesomeIcon icon={isPasswordShow2 ? faEye : faEyeSlash} className={style.iconPass2} onClick={tooglePasswordVisibility2} />
                </div>
                <div className="form-group mt-5">
                    <FontAwesomeIcon icon={faLock} className={style.iconLock3} />
                    <input
                        type={(isPasswordShow3) ? "text" : "password"}
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Repeat new password"
                        onChange={handleFormChange}
                    />
                    <FontAwesomeIcon icon={isPasswordShow3 ? faEye : faEyeSlash} className={style.iconPass3} onClick={tooglePasswordVisibility3} />
                </div>
                <Button title="Change Password" btn="btn-change-pass" onClick={handleUpdate} />
            </form>
        </div>


    )
}

export default ChangePassword
