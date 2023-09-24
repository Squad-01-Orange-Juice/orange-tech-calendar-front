import Nav from "./Nav"
import Styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={Styles["header"]}>
      <h1 className="heading-primary">Orange Tech Calendar</h1>
      <Nav />
    </header>
  )
}

export default Header
