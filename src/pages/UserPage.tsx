import "./UserPage.css"
import Header from "../components/header/Header"
import Calendar from "../components/calendar/Calendar"
import EventCard from "../components/calendar/EventCard"

const UserPage = () => {
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
