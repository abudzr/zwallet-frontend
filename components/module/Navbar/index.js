import React from 'react'
import Link from 'next/link'
import Button from '../Button'
import style from '../../../styles/navbar.module.css'

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link href="/">
                    <a className={style['navbar-brand']} >Zwallet</a>
                </Link>
                <div className="d-flex ">
                    <div className="mr-5 pt-5">
                        <Button
                            title="Login" btn="btn-login"
                        />
                    </div>
                    <div className="pt-5 mr-5">
                        <Button
                            title="Sign Up" btn="btn-signup"
                        />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar