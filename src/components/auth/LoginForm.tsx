import AuthFormPropsType from "../../types/AuthTypes"
import Styles from "./AuthForm.module.css"
import { ChangeEventHandler, useState } from "react"

const LoginForm = (props: AuthFormPropsType) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const setEmailHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setEmail(evt.target.value)
  }

  const setPasswordHandler:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setPassword(evt.target.value)
  }

  return (
    <form className={Styles["auth-form"]}>
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
