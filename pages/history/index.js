import Layout from '../../components/base/Layout'
import React from 'react'
import Sidebar from '../../components/module/Sidebar'
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'
import HistoryParts from '../../parts/History'


function history() {

    return (
        <Layout title="Top Up | Z-wallet" >
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        <HistoryParts />
                    </div>
                </div >
            </div >
            <Footer />
        </Layout>

    )
}

export default history