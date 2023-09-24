import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"
import { useState } from "react"
import "./AuthPage.css"

const AuthPage = (props: any) => {
  const [isLogin, setIsLogin] = useState(true)

  const setLoginHandler = () => {
    if(!isLogin) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }

  return (
    <section className="section-login">
      {
        isLogin ? <LoginForm changeAuthPage={setLoginHandler} /> : <RegisterForm setToken={props.saveToken} changeAuthPage={setLoginHandler} />
      }
    </section>
  )
}

export default AuthPage 
