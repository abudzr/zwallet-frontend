import React from 'react'
import Sidebar from '../../components/module/Sidebar'
import Layout from '../../components/base/Layout'
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'
import ChangePin from '../../parts/Profile/ChangePin'

function changePinPage() {
    return (
        <Layout title="Profile | Z-wallet" >
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        <ChangePin />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default changePinPage