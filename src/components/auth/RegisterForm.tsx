import AuthFormPropsType from "../../types/AuthTypes"
import Styles from "./AuthForm.module.css"
import axios from "axios"
import {  useState, ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react"

const RegisterForm = (props: AuthFormPropsType) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [userType, setUserType] = useState("")
  const [error, setError] = useState("")

  const submitHandler:FormEventHandler = (evt) => {
    evt.preventDefault()

    const REQUEST_LINK = "https://orange-tech-calendar-api-production.up.railway.app/auth/registrar"

    const requestBody = {
      login: email,
      nome: name,
      senha: password,
      userRole: userType
    }

    axios.post(REQUEST_LINK, requestBody)
      .then((res) => {
        console.log(res)   
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const setEmailHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setEmail(evt.target.value)
  }
  
  const setNameHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setName(evt.target.value)
  }

  const setPasswordHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPassword(evt.target.value)
  }
  
  const setConfirmHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setConfirm(evt.target.value)
  }

  const setUserTypeHandler = (type:string) => {
    setUserType(type)
  }

  return (
    <form className={Styles["auth-form"]} onSubmit={submitHandler}>
      <h2 className="heading-secondary">Registrar-se</h2>
      <p className="subtitle">Conecte-se a eventos e oportunidades de networking!</p>
      <fieldset>
        <label htmlFor="email" className="label">Email*</label>
        <input type="email" placeholder="Digite seu email" id="email" className="input" value={email} onChange={setEmailHandler} />
      </fieldset>
      <fieldset>
        <label htmlFor="name" className="label">Nome*</label>
        <input type="email" placeholder="Digite seu nome" id="nome" className="input" value={name} onChange={setNameHandler} />
      </fieldset>
      <fieldset>
        <label htmlFor="password" className="label">Senha*</label>
        <input type="password" placeholder="Digite sua senha" id="password" className="input" value={password} onChange={setPasswordHandler} />
      </fieldset>
      <fieldset>
        <label htmlFor="password" className="label">Confirmar Senha*</label>
        <input type="password" placeholder="Digite sua senha" id="confirm" className="input" value={confirm} onChange={setConfirmHandler} />
      </fieldset>  
      <fieldset className="m-2">
        <h3 className="heading-tertiary">Selecione o tipo de usuário</h3>
        <label htmlFor="userTypeNormal" className="">Usuário*</label>
        <input type="radio" name="userType" value="USER" id="userTypeNormal" onChange={() => setUserTypeHandler("USER")} />
        <label htmlFor="userTypeAdmin" className="">Administrador*</label>
        <input type="radio" name="userType" value="ADMIN" id="userTypeAdmin" onChange={() => setUserTypeHandler("ADMIN")} />
      </fieldset>  
      <button className="btn btn--orange">Registrar-se</button>
      <a onClick={props.changeAuthPage}>Já tem cadastro? <span className="link">Faça login agora!</span></a>
    </form>
  )
}

export default RegisterForm
