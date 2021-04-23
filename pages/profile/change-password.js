import React from 'react'
import Sidebar from '../../components/module/Sidebar'
import PersonalInfo from '../../parts/Profile/PersonalInformation'
import Layout from '../../components/base/Layout'
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'
import ChangePassword from '../../parts/Profile/ChangePass'

function changePasswordPage() {
    return (
        <Layout title="Profile | Z-wallet" >
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                    <div className="col-lg-8">
                        <ChangePassword />
                        {/* <changePasswordPage /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default changePasswordPage
