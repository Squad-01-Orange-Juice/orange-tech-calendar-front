import { MouseEventHandler } from "react"

type AuthFormPropsType = {
  changeAuthPage: MouseEventHandler<HTMLAnchorElement> 
  setToken: Function
}

export default AuthFormPropsType
