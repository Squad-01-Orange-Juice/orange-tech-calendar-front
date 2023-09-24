import { MdLocationOn } from "react-icons/md"
import { useState } from "react"
import Styles from "./EventCard.module.css"

const EventCard = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={Styles["card"]}>
      <div className={Styles["card__img-box"]}>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FESXMg9OzWrQ%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=05ee854711c124a80824c85a10c306caae400f13a0b14256dcd13a10e9d494d0&ipo=images" alt="" className={Styles["card__img"]} />
      </div>
      <div className={Styles["card__body"]}>
        <p className={Styles["card__date"]}>
          <span>nov</span>
          <span>25</span>
        </p>
        <div className={Styles["card__body-right"]}>
          <h4 className={Styles["card__location"]}>
            <MdLocationOn className={Styles["card__icon"]} />
            Online
          </h4>
          <h3 className={Styles["card__title"]}>Rustconf 2023</h3>
          <p className={Styles["card__desc"]}>Going hard this november with your favorite programmers</p>
          <button className="btn btn--orange btn--small">Inscrever-se</button>
        </div>
      </div>
    </div>
  )
}

export default EventCard
