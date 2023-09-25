import "./UserPage.css"
import Header from "../components/header/Header"
import Calendar from "../components/calendar/Calendar"
import EventCard from "../components/calendar/EventCard"
import { useEffect, useState } from "react"
import axios from "axios"
import EventCardPropsType from "../types/EventCardPropsType"

const UserPage = () => {
  const [ eventsList, setEventsList ] = useState<any[] | null>(null)

  useEffect(() => {
    if(localStorage.getItem("token") !== "") {
      const REQ_LINK = "https://orange-tech-calendar-api-production.up.railway.app/eventos"

      axios.get(REQ_LINK, { headers: {"Authorization": `${localStorage.getItem("token")}`}})
      .then((res) => {
        console.log(res)

        setEventsList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [])

  return (
    <section className="section-user">
      <Header />
      <h2 className="heading-secondary">Seus Eventos</h2>
      <Calendar />
      <div className="section-user__suggestions">
        <h2 className="heading-secondary">Talvez você goste</h2>
        {
          eventsList ? 
          eventsList!.map((event: EventCardPropsType ) => <li><EventCard data={event} /></li>)
          : "Erro no carregamento"
        } 
      </div>
    </section>
  )
}

export default UserPage
