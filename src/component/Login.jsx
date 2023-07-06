import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Login = () => {
  return (
    <div className='Login'>
      <div className='loginblock'>
        <div className="loginleft">
          <h1>Already a user, login</h1>
          <p className='alreadyUser'> Create new account <Link className='loginLink' to='/option'>signup</Link></p>
          <label htmlFor="">Username</label>
          <input className='username' type="text" />
          <label htmlFor="">Password</label>
          <input className='password' type="password" />
          <button className='submit'>Submit</button>
        </div>
        <div className="loginright">
          <img className='logoImage' src={logo} alt="" />
          <h1 className='logoName' style={{ margin: "0" }}>Hire Storm</h1>
          <p style={{ fontWeight: "lighter" }}>Harness the power of Hirestorm, paving your path to success.</p>
        </div>
      </div>
    </div>
  )
}

export default Login