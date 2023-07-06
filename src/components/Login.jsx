import React from 'react'
import Logincomponent from './Logincomponent'
import Signupcomponent from './Signupcomponent'

const Login = () => {
    return (
        <div className='Login'>
            <div className="loginBox">
                <div>
                    <button className='loginBtn ActiveBtn'>Login</button>
                    <button className='signBtn'>SignUp</button>
                </div>
                <Logincomponent />
                {/* <Signupcomponent/> */}
            </div>
        </div>
    )
}

export default Login