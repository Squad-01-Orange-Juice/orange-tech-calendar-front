import axios from "axios"
import AuthFormPropsType from "../../types/AuthTypes"
import Styles from "./AuthForm.module.css"
import { ChangeEventHandler, FormEventHandler, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const LoginForm = (props: AuthFormPropsType) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")
      
  const navigate = useNavigate()

  const setEmailHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setEmail(evt.target.value)
  }

  const setPasswordHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPassword(evt.target.value)
  }

  const setUserTypeHandler = (type:string) => {
    setUserType(type)
  }

  const submitLoginHandler:FormEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault()

    if(password.trim() !== "" && email.trim() !== "") {
      const requestBody = {
        login: email,
        password: password
      }

      const LOGIN_URL = "https://orange-tech-calendar-api-production.up.railway.app/auth/login"
       
      axios.post(LOGIN_URL, requestBody)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
      })
      .catch((err) => {
        console.log("Error: ", err) 
      })
      .finally(() => {
        if(localStorage.getItem("token") !== "") {
          if(userType === "ADMIN") {
            navigate("/org")
          } else {
            navigate("/user")
          }
        }
      })
    }
  }

  return (
    <form className={Styles["auth-form"]} onSubmit={submitLoginHandler}>
      <h2 className="heading-secondary">Login</h2>
      <p className="subtitle">Conecte-se a eventos e oportunidades de networking!</p>
      <fieldset>
        <label htmlFor="email" className="label">Email*</label>
        <input type="email" placeholder="Digite seu email" id="email" className="input" value={email} onChange={setEmailHandler} />
      </fieldset>
      <fieldset>
        <label htmlFor="password" className="label">Senha*</label>
        <input type="password" placeholder="Digite sua senha" id="password" className="input" value={password} onChange={setPasswordHandler} />
        <a className={Styles["auth-form__forgot"]}>Esqueceu a senha?</a>
      </fieldset>
      <fieldset className="m-2">
        <h3 className="heading-tertiary">Selecione o tipo de usuário</h3>
        <label htmlFor="userTypeNormal" className="">Usuário*</label>
        <input type="radio" name="userType" value="USER" id="userTypeNormal" onChange={() => setUserTypeHandler("USER")} />
        <label htmlFor="userTypeAdmin" className="">Administrador*</label>
        <input type="radio" name="userType" value="ADMIN" id="userTypeAdmin" onChange={() => setUserTypeHandler("ADMIN")} />
      </fieldset>  
      <button className="btn btn--orange">Login</button>

      <a onClick={props.changeAuthPage}>Não tem cadastro? <span className="link">Crie sua conta agora!</span></a>
    </form>
  )
}

export default LoginForm
