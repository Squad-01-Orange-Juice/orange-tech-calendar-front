import { MouseEventHandler, useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import Profile from "../user/Profile"
import Styles from "./Nav.module.css"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openNavHandler: MouseEventHandler<HTMLButtonElement> = () => {
    console.log("button clicked")
    if(isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const navButton = (
    <button className={Styles["nav-button"]} onClick={openNavHandler}>
      <MdMenu />
    </button>
  )

  const NavMenu = (
    <nav className={Styles["nav"]}>
      <div className={Styles["nav__header"]}> 
        <button className={Styles["nav-button"]} onClick={openNavHandler}>
          <MdClose /> 
        </button>
      </div>
      <Profile /> 
      <div className={Styles["nav__footer"]}>
        <button className="btn btn--transparent btn--md">Logoff</button>  
      </div>
    </nav> 
  )

  if(!isOpen) return navButton
  if(isOpen) return NavMenu
}

export default Nav
