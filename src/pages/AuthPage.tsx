import LoginForm from "../components/auth/LoginForm"
import RegisterForm from "../components/auth/RegisterForm"
import { useState } from "react"
import "./AuthPage.css"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false)

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
        isLogin ? <LoginForm changeAuthPage={setLoginHandler} /> : <RegisterForm changeAuthPage={setLoginHandler} />
      }
    </section>
  )
}

export default AuthPage 
