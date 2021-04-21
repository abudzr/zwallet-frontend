import React from 'react'
import style from '../../../styles/footer.module.css'

function Footer() {
    let isAuthenticated;
    if (typeof window !== "undefined") {
        isAuthenticated = localStorage.getItem("token");
    }
    if (!isAuthenticated) {
        return (
            <footer className={style.footer}>
                <div className="container">
                    <h2>Zwallet</h2>
                    <h6>Simplify financial needs and saving<br /> much time in banking needs with<br /> one single app.</h6>
                    <hr />
                    <div className="d-flex">
                        <p>2021 Zwallet. All right reserved.</p>
                        <p className={style['subtext-footer']}>+62563788829901</p>
                        <p className={style['subtext-footers']}>contact@zwallet.com</p>

                    </div>
                </div>
            </footer>
        )
    }
    return (
        <>
            <footer className={style['footer-login']}>
                <div className="container d-flex">
                    <span>2021 Zwallet. All right reserved.</span>
                    <p>+62 5637 8882 9901</p>
                    <p>contact@zwallet.com</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
