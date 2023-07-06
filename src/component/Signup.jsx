import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../images/logo.png'

const Signup = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profiledetails');
  }

  return (
    <div className='Login'>
        <div className='signupBlock'>
            
            <div className="loginright">
                <img className='logoImage' src={logo} alt="" />
                <h1 className='logoName' style={{margin: "0"}}>Hire Storm</h1>
                <p style={{fontWeight: "lighter"}}>Harness the power of Hirestorm, paving your path to success.</p>
            </div>
            <div className="loginleft">
                <h1>Create New Account</h1>
                <p className='alreadyUser'>Already a user? <Link className='loginLink' to="/">login</Link></p>
                <label htmlFor="">Email</label> 
                <input className='username' type="email" />
                <label htmlFor="">Username</label> 
                <input className='username' type="text" />
                <label htmlFor="">Password</label>
                <input className='password' type="password" />
                <button className='submit' onClick={handleClick}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Signup