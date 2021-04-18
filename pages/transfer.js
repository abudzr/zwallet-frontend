import Layout from '../components/base/Layout'
import React from 'react'
import Sidebar from '../components/module/Sidebar'
import Main from '../parts/Transfer'
import Navbar from '../components/module/Navbar'


function Transfer() {

    return (
        <Layout title="Top Up | Z-wallet" >
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
        </Layout>

    )
}

export default Transfer
