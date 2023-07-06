import React from 'react'

const Logincomponent = () => {
  return (
    <div className='logComponent'>
            <input className='username' type="text" placeholder='Username'/>
            <input className='password' type="password" placeholder='Password'/>
            <button className='submit' type='submit'>Submit</button>
    </div>
  )
}

export default Logincomponent