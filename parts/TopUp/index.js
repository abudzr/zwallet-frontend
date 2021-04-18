import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from '../../styles/topup.module.css'
import Button from '../../components/module/Button'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

function PartsTopUp() {
    const router = useRouter()
    const [user, setUser] = useState()
    const [data, setData] = useState({
        idUser: "",
        amount: "",
        notes: ""
    });
    const [selectValue, setSelectValue] = useState()

    const handleFormChange = (event) => {
        const dataNew = { ...data };
        dataNew[event.target.name] = event.target.value;
        setData(dataNew);
    };

    const handleDropdownChange = (e) => {
        setSelectValue(e.target.value);
    }

    const handleConfirm = (event) => {
        event.preventDefault();
        const url = axios.post('http://localhost:8080/api/v1/transaction/topup', {
            idUser: user,
            amount: data.amount,
            notes: selectValue
        })
            .then(res => {
                Swal.fire({
                    title: "Success!",
                    text: res.data.message,
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#6379F4",
                })
                router.push('/home')
            })
            .catch(err => {
                Swal.fire({
                    title: "Error!",
                    text: err.response.data.message,
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#6379F4",
                });
            })
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const url = 'http://localhost:8080/api/v1/users/find-one';
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                const data = res.data.data[0]
                setUser(data.id)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <div className={style['card-topup']}>
            <div className="container">
                <p>Top Up</p>
                <form className={[["mt-5"], style["form-topup"]].join(" ")}>
                    <div className="form-group">
                        <input
                            type="number"
                            className={[["form-control mt-1"], style["form-control"]].join(
                                " "
                            )}
                            name="amount"
                            id="amount"
                            placeholder="Enter your amount"
                            onChange={handleFormChange}
                        />
                    </div>
                    {/* <div className="form-group">
                        <input
                            type="text"
                            className={[["form-control mt-1"], style["form-control"]].join(
                                " "
                            )}
                            name="notes"
                            id="notes"
                            placeholder="Notes"
                            onChange={handleFormChange}
                        />
                    </div> */}
                    <div className="form-group">
                        <select id="notes" name="notes" onChange={handleDropdownChange}>
                            <option value="" disabled selected>Payment Method</option>
                            <option value="atm">ATM</option>
                            <option value="ebanking">E-Banking</option>
                            <option value="ovo">Ovo</option>
                            <option value="dana">Dana</option>
                        </select>
                    </div>
                </form>
                <Button title="Confirm" btn="btn-confirm" onClick={handleConfirm} />
            </div>
        </div>
    )
}

export default PartsTopUp
