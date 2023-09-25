import "./hnm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faCircle ,faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping ,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
// import img from './images/hnmImg.png' 
function Header(){

    const locate = useNavigate()

    function mens(){
        locate('./Mens')
    }
    function home(){
        locate('/')
    }
    return(
        <div className="header">
            <div className="header-top">
                <div className="head-l">
                    <div className="h-left">CustomerService</div>
                    <div className="h-left">NewsLetter</div>
                    <div className="h-left">Find a Store</div>
                    <div className="h-left"><FontAwesomeIcon icon={faCircle} className="circle"/><FontAwesomeIcon icon={faCircle} className="circle" /><FontAwesomeIcon icon={faCircle} className="circle" /></div>
                </div>
                <div className="hnm-image"><img onClick={home} src="hnmImg.png" alt="" /></div>
                <div className="head-r">
                    <div><FontAwesomeIcon icon={faUser} className="user"/> <span>Signin</span></div>
                    <div><FontAwesomeIcon icon={faHeart} className="favourite" /> <span>Favourites</span></div>
                    <div><FontAwesomeIcon icon={faBagShopping} className="cart" /><span>Shopping Bag</span></div>
                </div>
            </div>
           <div className="head-bottom">
            <div className="filter">
                <ul>
                    <li>Ladies</li>
                    <li onClick={mens}>Men</li>
                    <li>Divided</li>
                    <li>Baby</li>
                    <li>Kids</li>
                    <li>H&M HOME</li>
                    <li>Sport</li>
                    <li>Sustainablilty</li>
                    <li>Sale</li>
                </ul>
            </div>
            <div className="f-right">
                <div><FontAwesomeIcon icon={faMagnifyingGlass} className="search"/></div>
                <input type="text" placeholder="Search Products"/>

            </div>
           </div>
        </div>
    )
}

export default Header