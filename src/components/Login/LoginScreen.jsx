import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import FormRegister from "./FormRegister";
import './style/loginScreen.css'
import UserLogged from "./UserLogged";

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changedToken = localStorage.getItem('token')

  const [isRegistering, setIsRegistering] = useState(false)

  useEffect(() => {

    setToken(changedToken)
  }, [changedToken])
  
  return (
    <div className="login">
      {
        token ?
          <UserLogged />
        :
          (isRegistering ?
          <FormRegister setIsRegistering={setIsRegistering}/> :
          <Form setIsRegistering={setIsRegistering} />)
      }
    </div>
  );
};

export default LoginScreen;
