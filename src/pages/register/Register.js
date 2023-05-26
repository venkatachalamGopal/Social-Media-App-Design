import React from 'react';
import{ Link} from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className='register'>
    <div className='card'>
        <div className='left'>
            {/* <h1>Welcome to our website</h1> */}
            <p>"We've been using Untitled to kick start every new project and can't imagine without working it".</p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className='right'>
            <h3>Create an account</h3>
            <form >
                <input type="text" placeholder='Username' autoComplete='off'/>
                <input type="email" placeholder='Email' autoComplete='off'/>
                <input type="password" placeholder='Password'autoComplete='off' />
                <input type="password" placeholder='Confirm password'autoComplete='off' />
                <button>Register</button>
            </form>
            
        </div>
    </div>
    </div>
  )
}

export default Register
