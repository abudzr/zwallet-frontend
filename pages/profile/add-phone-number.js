import { React, useState } from "react";
import Layout from '../../components/base/Layout'
import Footer from '../../components/module/Footer'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import style from '../../styles/addphone.module.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/module/Button';
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRouter } from 'next/router'

function addPhoneNumber() {
    const router = useRouter()
    const [data, setData] = useState(null);

    const handleFormChange = (event) => {
        const dataNew = {
            ...data,
        };
        dataNew[event.target.name] = event.target.value;
        // console.log(dataNew);
        setData(dataNew);
    };

    const handleSave = (event) => {
        event.preventDefault();
        const id = localStorage.getItem('id')
        const url = `${process.env.api}/users/add-phone/${id}`
        console.log(url);
        axios.put(url, data)
            .then((res) => {
                router.push("/profile")
                Swal.fire("Success", "Add Phone Number Success!", "success");

            }, (err) => {
                if (err) {
                    setShow(false);
                    Swal.fire(" ERROR!!!", "Add Phone Number Failed!", "error");
                }
            })
    }


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
                            <h6>Add Phone Number</h6>
                            <p>Add at least one phone number for the transfer<br /> ID so you can start transfering your money to<br /> another user.</p>
                            <form>
                                <div className="form-group mt-5">
                                    <span>+62</span>
                                    <FontAwesomeIcon icon={faPhone} className={style.iconPhone} />
                                    <input
                                        type="number"
                                        className={[["form-control mt-1"], style["form-control"]].join(
                                            " "
                                        )}
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="Enter your phone number"
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <Button title="Add Phone Number" btn="btn-change-pass" onClick={handleSave} />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default addPhoneNumber
