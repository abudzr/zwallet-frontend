import Sidebar from '../../components/module/Sidebar'
import style from '../../styles/profile.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Image from 'next/image'
import Button from '../../components/module/Button'
// import PersonalInfo from '../../parts/Profile/PersonalInformation'
import Layout from '../../components/base/Layout'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'
import Swal from 'sweetalert2'

function Profile() {
    const router = useRouter()
    const [user, setUser] = useState([])
    const [data, setData] = useState({
        firstname: "",
        lastname: ""
    });
    const [dataImage, setDataImage] = useState({
        image: {},
    });
    const [imgUrl, setImgUrl] = useState(`${process.env.api_img}${user.image}`);

    const handlelogout = () => {
        localStorage.clear('token');
        router.push('/')
    }
    const handleClickPersonal = () => {
        router.push('/profile/personal-info')
    }
    const handleChangePass = () => {
        router.push('/profile/change-password')
    }

    const hiddenFileInput = useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };
    const handleChangeImage = (event) => {
        setDataImage({
            image: event.target.files[0],
        });
        console.log(event.target.files[0]);
        // setStatus(true);
        setImgUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleFormChange = (event) => {
        const userNew = { ...data };
        userNew[event.target.name] = event.target.value;
        // console.log(userNew);
        setData(userNew);
    };

    const handleSave = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("firstname", data.firstname);
        formData.append("lastname", data.lastname);
        formData.append("image", dataImage.image);
        const url = `${process.env.api}/users/${user.id}`
        // console.log(url);
        axios.patch(url, formData)
            .then((res) => {
                // this.getPostAPI()

                Swal.fire("Update Profile Success!", "", "success");

            }, (err) => {
                if (err) {
                    Swal.fire(" ERROR!!!", "Update Failed", "error");
                }
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
                setUser(data)
                setData(data)
                setImgUrl(`${process.env.api_img}${res.data.data[0].image}`);
                // console.log(res.data.data[0].image);
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
                            <div className={style['image-user']}>
                                <img
                                    src={imgUrl}
                                    alt="Picture feature"
                                    width={80}
                                    height={80}
                                />
                            </div>

                            <div className={style.editProfile}  >
                                <img
                                    src="/images/pencil.png"
                                    alt="edit profile"
                                    width={20}
                                    height={20}
                                />
                                <Button title="Edit" btn="btn-edit" toggle="modal" target="#exampleModalCenter" />
                                {/* <p>Edit</p> */}
                            </div>
                            <h5>{user.firstname} {user.lastname}</h5>
                            <p>{user.phoneNumber}</p>
                            <div className="d-flex">
                                <Button title="Personal Information" btn="btn-profile" onClick={handleClickPersonal}>
                                </Button>
                                <FontAwesomeIcon icon={faArrowRight} className={style.iconProfile} />
                            </div>
                            <div className="d-flex">
                                <Button title="Change Password" btn="btn-profile" onClick={handleChangePass}>
                                </Button>
                                <FontAwesomeIcon icon={faArrowRight} className={style.iconProfile} />
                            </div>
                            <div className="d-flex">
                                <Button title="Change PIN" btn="btn-profile">
                                </Button>
                                <FontAwesomeIcon icon={faArrowRight} className={style.iconProfile} />
                            </div>
                            <div className="d-flex">
                                <Button title="Logout" btn="btn-profile" onClick={handlelogout}>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" data-backdrop="false" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Your Profile</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row justify-content-center mb-4">
                                <div className={style['image-user-modal']}>
                                    <img
                                        src={imgUrl}
                                        alt="Picture feature"
                                        width={90}
                                        height={90}
                                    />
                                    <Button
                                        title="Choose photo"
                                        btn="btn-choose-picture"
                                        onClick={handleClick}
                                    />
                                    <input
                                        type="file"
                                        name="image"
                                        ref={hiddenFileInput}
                                        onChange={(event) => handleChangeImage(event)}
                                        style={{ display: "none" }}
                                    />
                                </div>
                            </div>
                            <div className="justify-content-center">
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    type="text"
                                    className={[["form-control mt-1"], style["form-edit-profile"]].join(" ")}
                                    name="firstname"
                                    id="firstname"
                                    value={data.firstname}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="justify-content-center">
                                <label htmlFor="lastname">Last Name</label>

                                <input
                                    type="text"
                                    className={[["form-control mt-1"], style["form-edit-profile"]].join(" ")}
                                    name="lastname"
                                    id="lastname"
                                    value={data.lastname}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>
                        <div className={[["modal-footer"], style["btn-modal"]].join(" ")}>
                            <Button title="Save Changes" btn="btn-continue" onClick={handleSave} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default Profile
