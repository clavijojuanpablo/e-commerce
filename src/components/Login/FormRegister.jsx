import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const FormRegister = ( {setIsRegistering } ) => {

  const [isErrorLogin, setIsErrorLogin] = useState(false)

  const { handleSubmit, reset, register } = useForm()

  const navigate = useNavigate()

  const loginFinal = (email, pass) => {
    const objLogin = {
      email: email,
      password: pass
    }
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, objLogin)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
      })
      .catch(err => {
        localStorage.removeItem('token')
        console.log(err.data)
      })
  }

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        navigate('/')
        loginFinal(data.email, data.password)
      })
      .catch(err => {
        console.log(err.response)
      })

  }

  const goToLogin = () => setIsRegistering(false)

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">

      <h3>Sign Up</h3>

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
          <label htmlFor="login-first" className="login__label">First Name</label>
          <input
            type="text"
            className="login__input"
            id="login-first"
            {...register('firstName')}
          />
        </li>

        <li className="login__item">
          <label htmlFor="login-last" className="login__label">Last Name</label>
          <input
            type="text"
            className="login__input"
            id="login-last"
            {...register('lastName')}
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

        <li className="login__item">
          <label htmlFor="login-phone" className="login__label">Phone</label>
          <input
            type="number"
            className="login__input"
            id="login-phone"
            {...register('phone')}
          />
        </li>

        <li className="login__item">
          <input
            type="hidden"
            className="login__input"
            value="admin"
            {...register('role')}
          />
        </li>

      </ul>

      <button>Sign Up</button>
      <p>Already have an account? <span onClick={goToLogin}>Log in</span></p>
    </form>
  )
}

export default FormRegister