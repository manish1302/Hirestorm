import React from 'react'

const Signupcomponent = () => {
  return (
    <div>
        <form action="" className='signForm'>
            <div >
                <button>Job Seeker</button>
                <button>Company</button>
            </div>
            <input className='username' type="text" placeholder='Username'/>
            <input className='password' type="password" placeholder='Password'/>
            <button className='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Signupcomponent