import { MdLocationOn } from "react-icons/md"
import { MouseEventHandler, useState } from "react"
import Styles from "./EventCard.module.css"
import EventCardPropsType from "../../types/EventCardPropsType"
import axios from "axios"

const EventCard = (props: {data: EventCardPropsType}) => {
  const [isOpen, setIsOpen] = useState(false)

  const FINAL_DATE = new Date(props.data.dataFinal)

  const SubscribeHandler:MouseEventHandler<HTMLButtonElement> = () => {
    const LINK = "https://orange-tech-calendar-api-production.up.railway.app/eventos/idEvento/inscricao"
    const requestBody = {
      id: localStorage.getItem("id")
    }

    axios.post(LINK, requestBody, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}`}})
      .then((res) => {
        console.log("adicionado", res)
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }

  return (
    <div className={Styles["card"]}>
      <div className={Styles["card__img-box"]}>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FESXMg9OzWrQ%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=05ee854711c124a80824c85a10c306caae400f13a0b14256dcd13a10e9d494d0&ipo=images" alt="" className={Styles["card__img"]} />
      </div>
      <div className={Styles["card__body"]}>
        <p className={Styles["card__date"]}>
          <span>{FINAL_DATE.getMonth()}</span>
          <span>{FINAL_DATE.getDay()}</span>
        </p>
        <div className={Styles["card__body-right"]}>
          <h4 className={Styles["card__location"]}>
            <MdLocationOn className={Styles["card__icon"]} />
            {props.data.nome}
          </h4>
          <h3 className={Styles["card__title"]}>{props.data.nome}</h3>
          <p className={Styles["card__desc"]}>{props.data.descricao}</p>
          <button className="btn btn--orange btn--small" onClick={subscribeHandler}>Inscrever-se</button>
        </div>
      </div>
    </div>
  )
}

export default EventCard
