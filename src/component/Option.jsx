import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'

const Option = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup')
    }

    return (
        <div className='Login'>
            <div className='optionblock'>

                <img className='logoImage' src={logo} alt="" />
                <h3>Who are you?</h3>
                <div className="">
                    <button className='submit optionBtn' onClick={handleClick} style={{ margin: "10px 20px" }}>Job Seeker</button>
                    <button className='submit optionBtn' onClick={handleClick} style={{ margin: "10px 20px" }}>Recruiter</button>
                </div>
            </div>
        </div>
    )
}

export default Option