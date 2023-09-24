import Header from "../components/header/Header"
import EventCard from "../components/calendar/EventCard"
import EventForm from "../components/user/EventForm"
import { MdAddCircleOutline } from "react-icons/md"
import "./OrgPage.css"
import { MouseEventHandler, useState } from "react"

const OrgPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const setFormOpen:MouseEventHandler<HTMLButtonElement> = () => {
    console.log("clicked")
    if(isFormOpen) {
      setIsFormOpen(false)
    } else {
      setIsFormOpen(true)
    }
  }

  return (
    <section className="section-org">
      <Header />
      <div>
        <h2 className="heading-secondary">Meus Eventos</h2>
        
        <button className="btn btn--small btn--transparent" onClick={setFormOpen}><MdAddCircleOutline /></button>
        { isFormOpen ? <EventForm /> : "" }
        <ul>
          <li><EventCard /></li>
        </ul>
      </div>
    </section>
  )
}

export default OrgPage
