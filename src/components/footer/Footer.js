import React from 'react'
import FooterForm from './FooterForm'

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p> we are on Android and Apple</p>
                    </div>
                    <div className="footer-col-2">
                        <img src="itmo.jpeg" />
                        <p>Kronverkskiy Prospekt, 49, St Petersburg, 197101</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Feedback</h3>
                        <FooterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;