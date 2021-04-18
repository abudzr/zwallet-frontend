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
    const [user, setUser] = useState([])
    // const [image, setImage] = useState()
    const router = useRouter()

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
                setUser(data)
                // setImage(res.data.data[0].image)
                // console.log(res.data.data[0].image);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

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
                                        <Link href="/">
                                            <a >Transfer</a>
                                        </Link>
                                    </div>
                                    <div className={style['card-header']}>
                                        <FontAwesomeIcon icon={faPlus} className={style.iconHeader} />
                                        <Link href="/">
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
                                        <div>
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
                                        <h4>See all</h4>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <Image
                                            src="/images/user.png"
                                            alt="Picture feature"
                                            width={56}
                                            height={56}
                                        />
                                        <div>
                                            <h5>Christine Mar...</h5>
                                            <p>Transfer</p>
                                        </div>
                                        <h6 className={style.income}>+Rp.50.000</h6>
                                    </div>
                                    <div className="d-flex">
                                        <Image
                                            src="/images/user.png"
                                            alt="Picture feature"
                                            width={56}
                                            height={56}
                                        />
                                        <div>
                                            <h5>Netflix</h5>
                                            <p>Subscription</p>
                                        </div>
                                        <h6 className={style.expense}>-Rp.250.000</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        </Layout>

    )
}

export default Home
