import Layout from '../components/base/Layout'
import React from 'react'
import Sidebar from '../components/module/Sidebar'
import Main from '../parts/Transfer'
import Navbar from '../components/module/Navbar'
import Footer from '../components/module/Footer'


function Transfer() {

    return (
        <Layout title="Transfer | Z-wallet" >
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        <Main />
                    </div>
                </div >
            </div >
            <Footer />
        </Layout>

    )
}

export default Transfer
