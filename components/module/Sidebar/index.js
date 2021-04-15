import React from 'react'
import style from '../../../styles/sidebar.module.css'
import { faPlus, faArrowUp, faUser, faTachometerAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function Sidebar() {
    return (
        <div className={style.sidebar}>
            <div className="container">
                <div className="row flex flex-wrap">
                    <div className={[["mb-5"], style["icon-sidebar"]].join(" ")}>
                        <FontAwesomeIcon icon={faTachometerAlt} className={style.iconSidebar} />
                        <Link href="/home">
                            <a className={style['dashboard']} >Dashboard</a>
                        </Link>
                    </div>
                    <div className="mb-5">
                        <FontAwesomeIcon icon={faArrowUp} className={style.iconSidebar} />
                        <Link href="/">
                            <a className={style['Transfer']} >Transfer</a>
                        </Link>
                    </div>
                    <div className="mb-5">
                        <FontAwesomeIcon icon={faPlus} className={style.iconSidebar} />
                        <Link href="/">
                            <a className={style['top-up']} >Top Up</a>
                        </Link>
                    </div>
                    <div className="mb-5">
                        <FontAwesomeIcon icon={faUser} className={style.iconSidebar} />
                        <Link href="/profile">
                            <a className={style['profile']} >Profile</a>
                        </Link>
                    </div>
                    <div className={[["mb-5"], style["icon-logout"]].join(" ")}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={style.iconSidebar} />
                        <Link href="/">
                            <a className={style['log-out']} >Logout</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
