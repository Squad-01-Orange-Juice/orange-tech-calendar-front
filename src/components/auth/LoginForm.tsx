import axios from "axios"
import AuthFormPropsType from "../../types/AuthTypes"
import Styles from "./AuthForm.module.css"
import { ChangeEventHandler, FormEventHandler, useState, useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const LoginForm = (props: AuthFormPropsType) => {
  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const setEmailHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setEmail(evt.target.value)
  }

  const setPasswordHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPassword(evt.target.value)
  }

  const submitLoginHandler:FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()

    if(password.trim() !== "" && email.trim() !== "") {
      const requestBody = {
        email: email,
        password: password
      }

      const LOGIN_URL = "https://orange-tech-calendar-api-production.up.railway.app/auth/login"
       
      axios.post(LOGIN_URL, requestBody)
      .then((res) => {
        console.log(res)
        props.setToken(res.data.token)

        setAuthenticated(true)

        navigate("/")
      })
      .catch((err) => {
        console.log(err) 
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
      <button className="btn btn--orange">Login</button>

      <a onClick={props.changeAuthPage}>Não tem cadastro? <span className="link">Crie sua conta agora!</span></a>
    </form>
  )
}

export default LoginForm
