import Styles from "./Calendar.module.css"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { useEffect } from "react"

const Calendar = () => {
  useEffect(() => {
    
  }, [])

  return (
    <div className={Styles["calendar"]}>
      <FullCalendar
        locale="pt"
        plugins={[ dayGridPlugin ]}
        initialView="dayGridWeek"
      />
    </div>
  )
}

export default Calendar
