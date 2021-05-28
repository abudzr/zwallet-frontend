import React from 'react'
import Layout from '../../components/base/Layout'
import Sidebar from '../../components/module/Sidebar'
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'
// import DetailTransaction from '../../parts/History/detailHistory'
import axios from 'axios';
import style from '../../styles/history.module.css'
import { useRouter } from 'next/router'
import moment from 'moment';
moment.locale('en');



export default function index({ details }) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Please wait...</h1>;

    }
    return (
        <Layout title="History | Z-wallet" >
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        <div className={style['card-history']}>
                            <h3>Detail History</h3>
                            <div className={style['detail-transfer']}>
                                <span>Amount</span>
                                <p>Rp.{details.amount}</p>
                            </div>
                            <div className={style['detail-transfer']}>
                                <span>Type</span>
                                <p>{details.type}</p>
                            </div>
                            <div className={style['detail-transfer']}>
                                <span>Date & time</span>
                                <p>{moment(`${details.createdAt}`).format('LLLL')}</p>
                            </div>
                            <div className={style['detail-transfer']}>
                                <span>Notes</span>
                                <p>{details.notes}</p>
                            </div>

                            <p className={style['title-transfer']}>Transfer To</p>
                            <div className={[["d-flex"], ["align-items-center"], ["py-2"], ["pl-3"], ["mt-4"], style["form-users"]].join(" ")}>
                                <div className="image">
                                    <img
                                        src={`${process.env.api_img}${details.image}`}
                                        width={70}
                                        height={70}
                                        alt="User"
                                        className="user"
                                    />
                                </div>
                                <div className="d-flex flex-column ml-3">
                                    <span className={style.nameSearch}>{details.firstname}{details.lastname}</span>
                                    <span className={[["mt-1"], style["number-Phone"]].join(" ")}>{details.phoneNumber}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </Layout>
    )
}


export const getStaticProps = async (ctx) => {
    // const Url = process.env.api;
    try {
        const id = ctx.params.id;
        const result = await axios.get(`https://be-zwallet.abudzaralghifari.xyz/api/v1/transaction/detail/${id}`);
        const DetailTransaction = result.data.data[0];
        return {
            props: {
                details: DetailTransaction,
            },
        };
    } catch (err) {
        return {
            props: {
                details: null,
            },
        };
    }
};

export const getStaticPaths = async () => {
    // const Url = process.env.api;
    const result = await axios.get(`https://be-zwallet.abudzaralghifari.xyz/api/v1/transaction/detail/`);
    const data = result.data.data;
    const paths = data.map((item) => {
        return {
            params: { id: item.id.toString() },
        };
    });
    return {
        fallback: true,
        paths: paths,
    };
};
