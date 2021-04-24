import { React, useState, useEffect } from "react";
import Layout from '../../components/base/Layout'
import Footer from '../../components/module/Footer'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import style from '../../styles/managephone.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

function managePhone() {
    const router = useRouter();
    const [data, setData] = useState({});

    const handleDelete = (event) => {
        Swal.fire({
            title: "Are you sure you want to delete this?",
            showDenyButton: true,
            confirmButtonText: `Delete`,
            confirmButtonColor: "#6379F4",
            denyButtonText: "Cancel",
            denyButtonColor: `#ffba33`,
            focusDeny: true,
        }).then((result) => {
            if (result.isConfirmed) {
                event.preventDefault();
                const id = localStorage.getItem('id')
                const url = `${process.env.api}/users/delete-phone/${id}`
                // console.log(url);
                axios.put(url, data.phoneNumber)
                    .then(data => {
                        router.push("/profile")
                    })
                    .catch(err => alert(err));
            } else {
                Swal.fire({
                    title: "delete canceled",
                    text: "",
                    icon: "info",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#6a4029",
                });
            }
        });
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        const url = `${process.env.api}/users/find-one`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                const data = res.data.data[0]
                setData(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Layout title="Profile | Z-wallet" >
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        <div className={style['card-profile']}>
                            <h6>Manage Phone Number</h6>
                            <p>You can only delete the phone number and then<br /> you must add another phone number.</p>

                            <div className={[["d-flex"], ["justify-content-between"], style['card-phone']].join(" ")}>
                                <div>
                                    <p>Primary</p>
                                    <p>{data.phoneNumber}</p>
                                </div>
                                <div className="mt-3 mr-3"  >
                                    <img
                                        src="/images/trash.png"
                                        alt="delete phone"
                                        onClick={handleDelete}
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default managePhone
