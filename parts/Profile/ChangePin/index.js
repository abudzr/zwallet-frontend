import { React, useState, useEffect } from "react";
import style from '../../../styles/changepin.module.css'
import Button from '../../../components/module/Button';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import InputPin from "react-pin-input";


function ChangePin() {
    const router = useRouter();
    const [currentPin, setCurrentPin] = useState(null);
    const [pin, setPin] = useState(null);
    const [show, setShow] = useState(false);

    const handleCurrentChange = (value) => {
        // console.log(value);
        setCurrentPin(value);
    };
    const handlePinChange = (value) => {
        // console.log(value);
        setPin(value);
    }

    const handleContinue = () => {
        setShow(true);
    }
    // let token;
    // if (typeof window !== "undefined") {
    //     token = localStorage.getItem("token");
    // }
    const handleUpdate = (event) => {
        event.preventDefault();
        const id = localStorage.getItem('id')
        const url = `${process.env.api}/users/edit-pin/${id}`
        // console.log(url);
        axios.put(url, {
            currentPin: currentPin,
            pin: pin
        })
            .then((res) => {
                router.push("/profile")
                Swal.fire("Success", "Update Pin Success!", "success");

            }, (err) => {
                if (err) {
                    setShow(false);
                    Swal.fire(" ERROR!!!", "Update pin Failed!", "error");
                }
            })
    }

    return (

        <div className={style['card-profile']}>
            {show == false && (
                <>
                    <h6>Change Pin</h6>
                    <p>Enter your current 6 digits Zwallet PIN below to <br /> continue to the next steps.</p>
                    <div className={style['input-pin']}>
                        <InputPin
                            length={6}
                            secret
                            onChange={handleCurrentChange}
                            initialValue=""
                            type="numeric"
                            inputMode="number"
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            focus={true}
                        />
                    </div>
                    <Button title="Continue" btn="btn-change-pass" onClick={handleContinue} />
                </>
            )}

            {show == true && (
                <>
                    <h6>Change Pin</h6>
                    <p>Type your new 6 digits security PIN to use in <br /> Zwallet.</p>
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
                    <Button title="Change Pin" btn="btn-change-pass" onClick={handleUpdate} />
                </>
            )}


        </div>


    )
}

export default ChangePin
