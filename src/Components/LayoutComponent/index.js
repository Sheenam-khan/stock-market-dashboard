import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const IndexLayout = (props) => {
    console.log("props in layout", props)
    const {children}=props
    return (
        <React.Fragment>
            <div className="container-scroller">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            {children}
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default IndexLayout