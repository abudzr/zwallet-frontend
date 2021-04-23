import { React, useState } from "react";
import Layout from '../../components/base/Layout'
import Footer from '../../components/module/Footer'
import Navbar from '../../components/module/Navbar'
import Sidebar from '../../components/module/Sidebar'
import style from '../../styles/addphone.module.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../components/module/Button';

function changePassword() {
    const [data, setData] = useState({
        phoneNumber: "",
    });


    const handleFormChange = (event) => {
        const dataNew = {
            ...data,
        };
        dataNew[event.target.name] = event.target.value;
        setData(dataNew);
    };

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
                                        name="password"
                                        id="password"
                                        placeholder="Enter your phone number"
                                        onChange={handleFormChange}
                                    />
                                </div>
                                <Button title="Add Phone Number" btn="btn-change-pass" />
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default changePassword
