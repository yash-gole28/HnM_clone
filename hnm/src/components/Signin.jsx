// import styled from 'styled-components';
import React, { useState } from 'react';
import './hnm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'



function Signin() {
    const [isSigninActive,setButton] =useState(false)
    const handleButton = () => {
        setButton(!isSigninActive)
        console.log(isSigninActive)
    }
    const buttonClass = isSigninActive ? 'Active' : 'Inactive'
    
    function Submit(){
        alert('done')
    }
   return(
    <div >
        
        <button className={buttonClass} id='Signin' onClick={handleButton}>Signin</button>

        <div className="pop">
           <div className='pop-content'>
           <h2>Signin</h2>
            <div><FontAwesomeIcon icon={faX} onClick={handleButton} className='end'/></div>

            <p className='signIn-heading'>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
           <form action=""onSubmit={Submit}>
            <div  id='Email-label'>Email</div>
            <input type="email" name="" id="Email"/>

            <div id='Pass-label'>Password</div>
            <input type="password" name="" id="Password" />
            <div className='rememberMe'><div><input type="checkbox" name="" id="" />Remember me</div> <div>forgot password ?</div></div>
            <div><button type="submit" className='submit'>Signin</button></div>
            <div><button type="" className='Member'>Become a Member</button></div>
            <div className='M-info'>Membership Info</div>
           </form>
           </div>
        </div>
    </div>
   )
}

export default Signin;