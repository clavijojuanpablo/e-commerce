import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogged = () => {

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <article className='UserLogged'>
      <i className="fa-solid fa-user-check"></i>
      <h2>User Logged</h2>
      <p onClick={logOut}>Log Out</p>
    </article>
  )
}

export default UserLogged