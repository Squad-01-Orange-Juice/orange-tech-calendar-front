import "./UserPage.css"
import Header from "../components/header/Header"
import Calendar from "../components/calendar/Calendar"
import EventCard from "../components/calendar/EventCard"

const UserPage = () => {
  return (
    <section className="section-user">
      <Header />
      <div>
        <h2 className="heading-secondary">Seus Eventos</h2>
        <Calendar />
      </div>
      <div className="section-user__suggestions">
        <h2 className="heading-secondary">Talvez você goste</h2>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  )
}

export default UserPage
