import React from 'react'
import logo from '../images/logo.png'

const Companynav = () => {
  return (
    <div className='Cnavbar'>
        <div className="Clogodiv">
            <img className='logoImg' src={logo} alt="" />
            <h1 style={{fontFamily : "Lora"}}>Hire Storm</h1>
        </div>
        <div>
            <ul className='Cul'>
                <li><button>add job</button></li>
                <li><button>delete job</button></li>
                <li><button>view applicants</button></li>
                <li><button>view jobs</button></li>
                <li><button>delete job</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Companynav