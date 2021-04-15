import React from 'react'
import style from '../../../styles/footer.module.css'

function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <h2>Zwallet</h2>
                <h6>Simplify financial needs and saving<br /> much time in banking needs with<br /> one single app.</h6>
                <hr />
                <div className="d-flex">
                    <p>2020 Zwallet. All right reserved.</p>
                    <p className={style['subtext-footer']}>+62 5637 8882 9901</p>
                    <p className={style['subtext-footers']}>contact@zwallet.com</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer
