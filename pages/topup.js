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

import Navbar from '../components/module/Navbar'


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
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Layout title="Top Up | Z-wallet" >
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">

                    </div>
                </div >
            </div >
        </Layout>

    )
}

export default Home
