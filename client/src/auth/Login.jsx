import React from 'react'
import logo from '../assets/cakelogo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsHandIndex } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'

function Login() {
  const loginurl = 'http://localhost:8080/api/v1/user/login'
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const userData = { email, password }

    fetch(loginurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('token', data.data.token),
            toast.success(data.message)
          form.reset()
          navigate('/')
        }else{
          toast.error(data.message)
        }
      })
  }
  return (
    <div className='h-screen pt-[20vh] mb-5'>
      <form className='ease-in duration-300 w-[80%] mx-auto shadow-lg backdrop-blur-md bg-white/80
      lg:w-[50%] items-center rounded-md px-10 py-8' onSubmit={handleLogin}>
        <NavLink>
          <img src={logo} alt="logo" className='w-48 h-40 logo cursor-pointer items-center flex mx-auto' />
        </NavLink>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" name='email' className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center my-5 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input type="password" name='password' className="grow" placeholder='***********' />
        </label>
        <button className='bg-[#f54748] active:scale-90 transition duration-150 transform
        hover:shadow-xl shadow-md rounded px-8 py-2 text-xl font-medium text-white block
        mx-auto w-[100%]' type='submit'>  Sign In</button>
        <Link to={'/register'} className='font-semibold text-center py-4 block mx-auto'>Don't have account? <span className='text-[#fdc55e]'>Register</span></Link>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Login