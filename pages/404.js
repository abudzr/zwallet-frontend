import React from 'react'
import Link from 'next/link'
import styles from '../styles/404.module.css'

function page404() {
    return (
        <div className={styles['page-not-found']}>
            <h1 className={styles.status}>404</h1>
            <p className={styles.description}>PAGE NOT FOUND</p>
            <button className={styles['btn-404']}>
                <Link href="/" >
                    Back to Home
                </Link>
            </button>
        </div>
    )
}

export default page404
