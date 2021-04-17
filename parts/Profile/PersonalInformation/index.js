import React from 'react'
import style from './personalInfo.module.css'


function PersonalInfo() {
    return (
        <div className={style['card-personal']}>
            <h6>Personal Information</h6>
            <p>We got your personal information from the sign <br /> up proccess. If you want to make changes on<br /> your information, contact our support.</p>
            <div className={style['circle-edit']}></div>
            <form className={[["mt-5"], style["form-aside"]].join(" ")}>
                <div className={style['form-group']}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        name="firstname"
                        id="firstname"
                        placeholder="Enter your username"
                    // onChange={handleFormChange}
                    />
                </div>
                <div className={style['form-group']}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        name="lastname"
                        id="lastname"
                        placeholder="Enter your username"
                    // onChange={handleFormChange}
                    />
                </div>
                <div className={style['form-group']}>
                    <label htmlFor="email">Verified E-mail</label>
                    <input
                        type="text"
                        className={[["form-control mt-1"], style["form-control"]].join(
                            " "
                        )}
                        name="email"
                        id="email"
                        placeholder="Enter your username"
                    // onChange={handleFormChange}
                    />
                </div>
                <div className={style['form-group']}>
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <div className="d-flex">
                        <p>+62 813-9387-7946</p>
                        <p className={style.manage}>Manage</p>
                    </div>
                </div>
            </form>

        </div>

    )
}

export default PersonalInfo