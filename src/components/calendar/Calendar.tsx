import Styles from "./Calendar.module.css"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import EventObject from "../../types/EventType"
import { useEffect, useState } from "react"
import axios from "axios"
import { EventInput } from "@fullcalendar/core/index.js"

const DUMMY_EVENTS:EventInput[] = [
  {
    id: "1",
    title: "Hackathon Orange Juice",
    start: "2023-09-25"
  },
  {
    id: "2",
    title: "RustConf 2023",
    start: "2023-09-26"
  }
]

const Calendar = () => {
  const [events, setEvents] = useState<EventInput[]>(DUMMY_EVENTS)

  /* useEffect(() => {
    // Testing API
    // TOOD: Creae this events on he calendar
    axios.get("https://www.eventbriteapi.com/v3?token=Z762PR2OBX3ZFKOQUE3D")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error("Whoops! Something went wrong in request", err)
      })
  }, []) */

  return (
    <div className={Styles["calendar"]}>
      <FullCalendar
        locale="pt"
        height={250}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridWeek"
        headerToolbar={{
          left: "prev,next",
          right: "title"
        }}
        events={events}
      />
    </div>
  )
}

export default Calendar
