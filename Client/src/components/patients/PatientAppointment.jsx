import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const PatientAppointment = () => {
  return (
    <div>
        hi
        <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    </div>
  )
}

export default PatientAppointment