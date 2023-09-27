// import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
function Homepage() {
    // const route = useNavigate()
    return (
        <div id="homescreen">
            <Header />
            <div id="home-content">
                <div id="info-container">
                    <div>Members get free shipping above Rs.1999</div>

                    <div>Free & flexible 15 days return</div>

                    <div>Download the H&M App</div>
                </div>

                <div className="woman-img"><img src="img1.png" alt="" /></div>
                <div className="man-img"><img src="img2.png" alt="" /></div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage