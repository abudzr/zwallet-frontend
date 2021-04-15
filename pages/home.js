// import Layout from '../components/base/Layout'
import { useRouter } from 'next/router'
import Sidebar from '../components/module/Sidebar'
import style from '../styles/home.module.css'

function Home() {
    const router = useRouter()

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <Sidebar />
                </div>
                <div className="col-lg-8">
                    <div className={style['header-home']}>
                        <div className="row">
                            <div className="col-lg-8">
                                <h6>Balance</h6>
                                <h1>Rp.120.000</h1>
                                <p>082270730278738</p>
                            </div>
                            <div className="col-lg-4">
                                <div className={style['card-header']}></div>
                                <div className={style['card-header']}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
