import EventCardPropsType from "../../types/EventCardPropsType"
import Styles from "./EventCardFull.module.css"

const EventCardFull = (props: EventCardPropsType) => {
  return (
    <div className={Styles["card"]}> 
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
  )
}

export default EventCardFull
