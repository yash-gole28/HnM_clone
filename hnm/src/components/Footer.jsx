import "./hnm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="footer">
            <div className="f-content">
                <div className="f-c">
                    <h3>SHOP</h3>
                    <div>Ladies</div>
                    <div>Men</div>
                    <div>Baby</div>
                    <div>Kids</div>
                    <div>H&M HOME</div>
                    <div>Sport</div>
                </div>
                <div className="f-c">
                    <h3>CORPORATE INFO</h3>
                    <div>Career at H&M</div>
                    <div>About H&M group</div>
                    <div>Sustainability H&M Group</div>
                    <div>Press</div>
                    <div>Investor relations</div>
                    <div>Corporate governance</div>
                </div>
                <div className="f-c">
                    <h3>HELP</h3>
                    <div>Customer Service</div>
                    <div>My H&M</div>
                    <div>Find a store</div>
                    <div>Legal & Privacy</div>
                    <div>Contact</div>
                    <div>Report a scam</div>
                    <div>Cookie Notice</div>
                    <div>Cookie Settings</div>
                </div>
                <div className="f-c ">
                    <div>
                        <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
                    </div>
                    <div className="r-more"><div>Read More </div> <FontAwesomeIcon icon={faArrowRight} className="arrow" /></div>
                </div>

            </div>
            <div className="f-icons">
                <FontAwesomeIcon icon={faFacebook} className="font-icons" />
                <FontAwesomeIcon icon={faTwitter} className="font-icons" />
                <FontAwesomeIcon icon={faInstagram} className="font-icons" />
                <FontAwesomeIcon icon={faYoutube} className="font-icons" />
                <FontAwesomeIcon icon={faPinterest} className="font-icons" />
            </div>

            <div className="copyright"><p>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</p></div>
        </div>
    )
}

export default Footer