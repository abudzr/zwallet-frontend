import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from '../../styles/history.module.css'



function HistoryParts() {
    const [dataIsLogin, setDataIsLogin] = useState([]);
    const [user, setUser] = useState([]);

    let token;
    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
    }

    useEffect(() => {
        // const token = localStorage.getItem('token')

        const url = `${process.env.api}/users/find-one`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                const data = res.data.data[0]
                console.log(data);
                setDataIsLogin(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        const id = dataIsLogin.id
        const url = `${process.env.api}/transaction/user/${id}`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                const data = res.data.data
                console.log(data);
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [dataIsLogin, user]);


    return (
        <div className={style['card-history']}>
            <h3>Transaction History</h3>
            {user.map((item, index) => {
                return (
                    <div className={[['d-flex'], ['mb-3'], ['justify-content-between'], style['card-transaction-history']].join(" ")} key={index}>
                        <img src={`${process.env.api_img}${item.image}`}
                            alt="Picture Transaction"
                            width={70}
                            height={70} />
                        <div className={style['text-transaction']} >
                            <h5>{item.firstname} {item.lastname}</h5>
                            <p>{item.type}</p>
                        </div>
                        <div>
                            <h6 className={`${item.type === "Transfer" ? style['amount-transfer'] : style['amount-receiver']}`} >
                                {
                                    item.type === "Transfer"
                                        ? `-Rp${item.amount}`
                                        : `+Rp${item.amount}`
                                }
                            </h6>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default HistoryParts
