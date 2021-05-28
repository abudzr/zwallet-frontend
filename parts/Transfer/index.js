import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import style from '../../styles/transfer.module.css'
import Button from '../../components/module/Button'
import { useRouter } from 'next/router'
import moment from 'moment';
moment.locale('en');
import Rupiah from '../../helper/rupiah'
import ReactToPrint from "react-to-print";
// import { exportComponentAsJPEG } from "react-component-export-image"
import InputPin from "react-pin-input";

function PartTransfer() {
    const router = useRouter();
    const componentRef = useRef();
    const [name, setName] = useState("");
    const [result, setResult] = useState(false);
    const [search, setSearch] = useState(false);
    const [showresult, setShowresult] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
    const [dataIsLogin, setDataIsLogin] = useState([]);
    const [dataIdReceiver, setDataIdReceiver] = useState();
    const [dataReceiver, setDataReceiver] = useState([]);
    const [user, setUser] = useState([]);
    const [select, setSelect] = useState(false)
    const date = new Date()
    const [pin, setPin] = useState(null);

    const [data, setData] = useState({
        idUser: "",
        idReceiver: "",
        amount: "",
        notes: "",
        pin: ""
    });
    // const [pin, setPin] = useState({
    //     one: "",
    //     two: "",
    //     three: "",
    //     four: "",
    //     five: "",
    //     six: "",
    // });
    const handlePinChange = (value) => {
        // console.log(value);
        setPin(value);
    }
    // search by name
    const handleFormChange = (event) => {
        setName(event.target.value);
        const token = localStorage.getItem('token')
        const url = `${process.env.api}/users?keyword=${event.target.value}`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                if (event.target.value === "") {
                    setResult(false);
                    setSearch(false)

                } else {
                    setSearch(false)
                    setResult(true);
                }
                setUser(res.data.data);
            })
            .catch((err) => {
                setSearch(true)
                setResult(false);
            })
    };
    // get data by id 
    const handleClickUser = (data) => {
        setDataIdReceiver(data)
        setShowresult(true)
        setResult(false)
        setSelect(true)

        const url = `${process.env.api}/users/find-user?id=${data}`;
        axios.get(url)
            .then((res) => {
                const data = res.data.data[0]
                // console.log(data);
                setDataReceiver(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // change state data
    const handleChangeTransfer = (event) => {
        const dataNew = { ...data };
        dataNew[event.target.name] = event.target.value;
        // console.log(dataNew);
        setData(dataNew);
    }

    // const handleFormChangePin = (event) => {
    //     const dataNew = { ...pin };
    //     dataNew[event.target.name] = event.target.value;
    //     // console.log(dataNew);
    //     setPin(dataNew);
    // };

    const handleClickContinue = () => {
        setShowConfirmation(true)
        setShowresult(false)
    }

    const handleClickHome = () => {
        router.push('/home')
    }

    const handleConfirm = (event) => {
        event.preventDefault();
        // const pinnumber = `${pin.one}${pin.two}${pin.three}${pin.four}${pin.five}${pin.six}`;
        const url = axios.post(`${process.env.api}/transaction/transfer`, {
            idUser: dataIsLogin.id,
            idReceiver: dataIdReceiver,
            amount: data.amount,
            notes: data.notes,
            pin: pin
        })
            .then(res => {
                setShowSuccess(true)
                setShowConfirmation(false)
                // router.push('/home')
            })
            .catch(err => {
                setShowFailed(true)
                setShowConfirmation(false)
            })
    }


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
                setDataIsLogin(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <div className={style['card-transfer']}>
            <div className="container">
                {/* step 1 */}
                {select === false && (
                    <>
                        <p className={style['title-transfer']}>Search Receiver</p>
                        <form className="mt-4">
                            <div className={[["form-group"], style["form-receiver"]].join(" ")}>
                                <img
                                    src="/images/search.png"
                                    width={24}
                                    height={24}
                                    alt="Search"
                                    className="search-img"
                                />
                                <input
                                    type="text"
                                    name="keyword"
                                    placeholder="Search receiver here"
                                    value={name}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </form>
                    </>
                )

                }
                {search === true && (
                    <>
                        <div className="container text-center mt-5 ">
                            <p className="mb-4">please enter the data correctly</p>
                            <img className={style["img-nodata"]} src="/images/nodata.svg" alt="nodata img" />
                            <p className="mt-4">The recipient you are looking for was not found</p>
                        </div>
                    </>
                )}
                {result === true &&
                    user.map((item, index) => {
                        return (
                            <div
                                className={[["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], style["form-users"]].join(" ")}
                                key={index} onClick={() => handleClickUser(item.id)}
                            >
                                <div className="image">
                                    <img
                                        src={`${process.env.api_img}${item.image}`}
                                        width={70}
                                        height={70}
                                        alt="User"
                                        className="user"
                                    />
                                </div>
                                <div className="profile d-flex flex-column ml-3">
                                    <span className={style.nameSearch}>{item.firstname} {item.lastname}</span>
                                    <span className={[["mt-1"], style["number-Phone"]].join(" ")}>{item.phoneNumber}</span>
                                </div>
                            </div>
                        );
                    })
                }

                {/* step 2 */}
                {showresult === true && (
                    <>
                        <p className={style['title-transfer']}>Transfer Money</p>
                        <div
                            className={[["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], style["form-users"]].join(" ")}

                        >
                            <div className="image">
                                <img
                                    src={`${process.env.api_img}${dataReceiver.image}`}
                                    width={70}
                                    height={70}
                                    alt="User"
                                    className="user"
                                />
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <span className={style.nameSearch}>{dataReceiver.firstname}{dataReceiver.lastname}</span>
                                <span className={[["mt-1"], style["number-Phone"]].join(" ")}>{dataReceiver.phoneNumber}</span>
                            </div>
                        </div>
                        <p className={style['sub-title-transfer']}>Type the amount you want to transfer and then<br />
press continue to the next steps.</p>

                        <form className={[["mt-5"], style["form-transfer"]].join(" ")}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className={[["form-control mt-1"], style["form-control-transfer"]].join(
                                        " "
                                    )}
                                    name="amount"
                                    id="amount"
                                    placeholder={Rupiah('0')}
                                    onChange={handleChangeTransfer}
                                />
                            </div>
                        </form>
                        <p className={style.credit}>{Rupiah(`Rp${dataIsLogin.credit}`)} Available</p>
                        <div className="d-flex justify-content-center">
                            <form>
                                <img
                                    src="/images/pencil.png"
                                    width={20}
                                    height={20}
                                    alt="pencil"
                                    className={style['pencil-img']}
                                />
                                <input
                                    type="text"
                                    className={[["form-control mt-1"], style["form-notes"]].join(
                                        " "
                                    )}
                                    name="notes"
                                    id="notes"
                                    placeholder="Add some notes"
                                    onChange={handleChangeTransfer}
                                />
                            </form>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button title="continue" btn="btn-continue" onClick={handleClickContinue} />

                        </div>
                    </>
                )}

                {/* step 3 */}
                {/* detail tf */}
                {showConfirmation === true && (
                    <>
                        <p className={style['title-transfer']}>Transfer To</p>
                        <div className={[["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], style["form-users"]].join(" ")}>
                            <div className="image">
                                <img
                                    src={`${process.env.api_img}${dataReceiver.image}`}
                                    width={70}
                                    height={70}
                                    alt="User"
                                    className="user"
                                />
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <span className={style.nameSearch}>{dataReceiver.firstname}{dataReceiver.lastname}</span>
                                <span className={[["mt-1"], style["number-Phone"]].join(" ")}>{dataReceiver.phoneNumber}</span>
                            </div>
                        </div>
                        <p className={[["mt-4"], style['title-transfer']].join(" ")}>Detail</p>
                        <div className={style['detail-transfer']}>
                            <span>Amount</span>
                            <p>{Rupiah(`Rp.${data.amount}`)}</p>
                        </div>
                        <div className={style['detail-transfer']}>
                            <span>Balance Left</span>
                            <p>{Rupiah(`Rp.${dataIsLogin.credit - data.amount}`)}</p>
                        </div>
                        <div className={style['detail-transfer']}>
                            <span>Date & time</span>
                            <p>{moment(date).format('LLLL')}</p>
                        </div>
                        <div className={style['detail-transfer']}>
                            <span>Notes</span>
                            <p>{data.notes}</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button title="continue" btn="btn-continue" toggle="modal" target="#exampleModalCenter" />
                        </div>
                        {/* data-backdrop="false" */}
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" data-backdrop="false" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header ">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Enter PIN to Transfer</h5>

                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p className={style['sub-title-modal']}>Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                                        {/* <div className="d-flex justify-content-center"> */}
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
                                    </div>
                                    {/* </div> */}
                                    <div className={[["modal-footer"], style["btn-modal"]].join(" ")}>
                                        <Button title="continue" btn="btn-continue" onClick={handleConfirm} />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )}
                {/* transfer success */}
                {showSuccess === true && (
                    <>
                        <div ref={componentRef} >
                            <div className=" d-flex justify-content-center">
                                <img
                                    src="/images/success.png"
                                    width={70}
                                    height={70}
                                    alt="success"
                                    className={style['success-img']}
                                />
                            </div>
                            <p className={style['text-success']}>Transfer Success</p>
                            <p className={[["mt-4"], style['title-transfer']].join(" ")}>Detail</p>
                            <div className={style['detail-transfer']}>
                                <span>Amount</span>
                                <p>Rp.{data.amount}</p>
                            </div>
                            <div className={style['detail-transfer']}>
                                <span>Balance Left</span>
                                <p>Rp.{dataIsLogin.credit - data.amount}</p>
                            </div>
                            <div className={style['detail-transfer']}>
                                <span>Date & time</span>
                                <p>{moment(date).format('LLLL')}</p>
                            </div>
                            <div className={style['detail-transfer']}>
                                <span>Notes</span>
                                <p>{data.notes}</p>
                            </div>

                            <p className={style['title-transfer']}>Transfer To</p>
                            <div className={[["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], style["form-users"]].join(" ")}>
                                <div className="image">
                                    <img
                                        src={`${process.env.api_img}${dataReceiver.image}`}
                                        width={70}
                                        height={70}
                                        alt="User"
                                        className="user"
                                    />
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <span className={style.nameSearch}>{dataReceiver.firstname}{dataReceiver.lastname}</span>
                                    <span className={[["mt-1"], style["number-Phone"]].join(" ")}>{dataReceiver.phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div>
                                <img
                                    src="/images/share.png"
                                    width={24}
                                    height={24}
                                    alt="share"
                                    className={style.share}
                                />
                                <Button btn="btn-share" />
                            </div>
                            <div>
                                <img
                                    src="/images/download.png"
                                    width={22}
                                    height={22}
                                    alt="download"
                                    className={style.download}
                                />
                                {/* onClick={() =>
                                    exportComponentAsJPEG(componentRef, {
                                        fileName: `tickitz-${new Date().getTime()}`,
                                    })
                                } */}
                                <ReactToPrint
                                    trigger={() => (
                                        <Button title="Download" btn="btn-download" />
                                    )}
                                    content={() => componentRef.current}
                                />

                            </div>
                            <Button title="Back To Home" btn="btn-continue" onClick={handleClickHome} />
                        </div>
                    </>
                )}
                {/* transfer failed */}
                {showFailed === true && (
                    <>
                        <img
                            src="/images/failed.png"
                            width={70}
                            height={70}
                            alt="failed"
                            className={style['success-img']}
                        />
                        <p className={style['text-success']}>Transfer Failed</p>
                        <p className={style['text-fail']}>We can’t transfer your money at the moment, we recommend you to check your<br /> internet connection and try again.</p>
                        <div className={style['detail-transfer']}>
                            <span>Amount</span>
                            <p>Rp.{data.amount}</p>
                        </div>
                        <div className={style['detail-transfer']}>
                            <span>Balance Left</span>
                            <p>Rp.{dataIsLogin.credit - data.amount}</p>
                        </div>
                        <div className={style['detail-transfer']}>
                            <span>Date & time</span>
                            <p>{moment(date).format('LLLL')}</p>
                        </div>
                        <div className={style['detail-transfer']}>
                            <span>Notes</span>
                            <p>{data.notes}</p>
                        </div>

                        <p className={style['title-transfer']}>Transfer To</p>
                        <div className={[["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], style["form-users"]].join(" ")}>
                            <div className="image">
                                <img
                                    src={`${process.env.api_img}${dataReceiver.image}`}
                                    width={70}
                                    height={70}
                                    alt="User"
                                    className="user"
                                />
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <span className={style.nameSearch}>{dataReceiver.firstname}{dataReceiver.lastname}</span>
                                <span className={[["mt-1"], style["number-Phone"]].join(" ")}>{dataReceiver.phoneNumber}</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">

                            <Button title="Try Again" btn="btn-continue" onClick={handleClickHome} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default PartTransfer
