import Layout from '../components/base/Layout'
// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/module/Sidebar'
import style from '../styles/home.module.css'
import { faPlus, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
} from 'recharts';
import Navbar from '../components/module/Navbar'
import Footer from '../components/module/Footer'

const data = [
    {
        name: "Sat",
        income: 10000,
        outcome: -4000,
    },
    {
        name: "Sun",
        income: 5000,
        outcome: -3000,
    },
    {
        name: "Mon",
        income: 9800,
        outcome: -8000,
    },
    {
        name: "Tue",
        income: 9800,
        outcome: -4000,
    },
    {
        name: "Wed",
        income: 7800,
        outcome: -6000,
    },
    {
        name: "Thu",
        income: 5800,
        outcome: -2000,
    },
    {
        name: "Fri",
        income: 5800,
        outcome: -2000,
    },
];

function Home() {
    const [user, setUser] = useState([]);
    const [history, setHistory] = useState([]);

    // const [image, setImage] = useState()
    const router = useRouter()

    const handleHistory = () => {
        router.push('/history')
    }

    // let token;
    // if (typeof window !== "undefined") {
    //     token = localStorage.getItem("token");
    // }
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
                // console.log(data);
                setUser(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        let token;
        if (typeof window !== "undefined") {
            token = localStorage.getItem("token");
        }
        const id = user.id
        const url = `${process.env.api}/transaction/user/${id}`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                const data = res.data.data
                console.log(data);
                setHistory(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [history, user]);

    return (
        <Layout title="Home | Z-wallet" >
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        <div className={style['header-home']}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h6>Balance</h6>
                                    <h1>Rp.{user.credit}</h1>
                                    <p>{user.phoneNumber}</p>
                                </div>
                                <div className="col-lg-4">
                                    <div className={style['card-header']}>
                                        <FontAwesomeIcon icon={faArrowUp} className={style.iconHeader} />
                                        <Link href="/transfer">
                                            <a >Transfer</a>
                                        </Link>
                                    </div>
                                    <div className={style['card-header']}>
                                        <FontAwesomeIcon icon={faPlus} className={style.iconHeader} />
                                        <Link href="/topup">
                                            <a  >Top Up</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style['main-home']}>
                            <div className="d-flex">
                                <div className={style["main-chart"]}>
                                    <div className="d-flex mb-5">
                                        <div className={style['income-chart']}>
                                            <FontAwesomeIcon icon={faArrowDown} className={style.iconIncome} />
                                            <p>Income</p>
                                            <h2>Rp2.120.000</h2>
                                        </div>
                                        <div className={style['expense-chart']}>
                                            <FontAwesomeIcon icon={faArrowUp} className={style.iconExpense} />
                                            <p>Expense</p>
                                            <h2>Rp2.120.000</h2>
                                        </div>
                                    </div>
                                    <ResponsiveContainer width="95%" height="50%">
                                        <BarChart width={120} height={40} data={data}>
                                            <XAxis dataKey="name" />
                                            <Bar dataKey="income" fill="#6379F4" radius={20} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                {/* History */}
                                <div className={style["main-history"]}>
                                    <div className="d-flex">
                                        <h3>Transaction History</h3>
                                        <h4 onClick={handleHistory}>See all</h4>
                                    </div>
                                    {history.map((item, index) => {
                                        return (
                                            <div className="d-flex mb-3" key={index}>
                                                <img
                                                    src={`${process.env.api_img}${item.image}`}
                                                    alt="Picture feature"
                                                    width={56}
                                                    height={56}
                                                />
                                                <div>
                                                    <h5>{item.firstname}</h5>
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
                            </div>

                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </Layout>

    )
}

export default Home
