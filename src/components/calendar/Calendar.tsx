import Styles from "./Calendar.module.css"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
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

const Calendar = (props: {userEvents: EventInput[]}) => {

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
        events={props.userEvents}
      />
    </div>
  )
}

export default Calendar
