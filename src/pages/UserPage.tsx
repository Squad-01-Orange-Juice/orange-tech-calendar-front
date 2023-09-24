import "./UserPage.css"
import Header from "../components/header/Header"
import Calendar from "../components/calendar/Calendar"
import EventCard from "../components/calendar/EventCard"
import { useEffect, useState } from "react"
import axios from "axios"

const UserPage = () => {
  const [eventsList, setEventsList] = useState()

  useEffect(() => {
    axios.get("https://orange-tech-calendar-api-production.up.railway.app/eventos")
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <section className="section-user">
      <Header />
      <h2 className="heading-secondary">Seus Eventos</h2>
      <Calendar />
      <div className="section-user__suggestions">
        <h2 className="heading-secondary">Talvez você goste</h2>
        <ul className="event-list">
          <li>
            <EventCard />
          </li>
          <li>
            <EventCard />
          </li>
          <li>
            <EventCard />
          </li>
          <li>
            <EventCard />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UserPage
