import AuthFormPropsType from "../../types/AuthTypes"
import Styles from "./AuthForm.module.css"
import {  useState, ChangeEventHandler } from "react"

const RegisterForm = (props: AuthFormPropsType) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const setEmailHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setEmail(evt.target.value)
  }

  const setPasswordHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPassword(evt.target.value)
  }
  
  const setConfirmHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setConfirm(evt.target.value)
  }

  return (
    <form className={Styles["auth-form"]}>
      <h2 className="heading-secondary">Registrar-se</h2>
      <p className="subtitle">Conecte-se a eventos e oportunidades de networking!</p>
      <fieldset>
        <label htmlFor="email" className="label">Email*</label>
        <input type="email" placeholder="Digite seu email" id="email" className="input" value={email} onChange={setEmailHandler} />
      </fieldset>
      <fieldset>
        <label htmlFor="password" className="label">Senha*</label>
        <input type="password" placeholder="Digite sua senha" id="password" className="input" value={password} onChange={setPasswordHandler} />
      </fieldset>
      <fieldset>
        <label htmlFor="password" className="label">Confirmar Senha*</label>
        <input type="password" placeholder="Digite sua senha" id="confirm" className="input" value={confirm} onChange={setConfirmHandler} />
      </fieldset>
      <button className="btn btn--orange">Registrar-se</button>
      <a onClick={props.changeAuthPage}>Já tem cadastro? <span className="link">Faça login agora!</span></a>
    </form>
  )
}

export default RegisterForm
