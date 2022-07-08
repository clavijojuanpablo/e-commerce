import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = ( {setIsRegistering } ) => {

  const [isErrorLogin, setIsErrorLogin] = useState(false)

  const { handleSubmit, reset, register } = useForm()

  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        navigate('/')
      })
      .catch(err => {
        localStorage.removeItem('token')
        setIsErrorLogin(true)
        setTimeout(() => {
          setIsErrorLogin(false)
        }, 5000)
      })
    reset({
      email: '',
      password: ''
    })
  }
  const goToLogin = () => setIsRegistering(true)

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">

      <h3>Welcome! Enter your email and password to continue</h3>

      <ul className="login__test">

        <p><b>Test Data</b></p>

        <div className="TestInfo">
          <p> <i className="fa-solid fa-envelope"></i> juanpablo@gmail.com </p>
          
          <p><i className="fa-solid fa-lock"></i> 12345678</p>
        </div>

      </ul>

      <ul className="login__list">
        <li className="login__item">
          <label htmlFor="login-email" className="login__label">Email</label>
          <input
            type="email"
            className="login__input"
            id="login-email"
            {...register('email')}
          />
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login__label">Password</label>
          <input
            type="password"
            className="login__input"
            id="login-pass"
            {...register('password')}
          />
        </li>
      </ul>
      <div>
        {
          isErrorLogin && 'Invalid credentials, try again...'
        }
      </div>
      <button>Login</button>
      <p>Don't have an account? <span onClick={goToLogin}>Sign up</span></p>
    </form>
  )
}

export default Form