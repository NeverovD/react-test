import React from 'react'
import {CalendarGrid} from './calendar-components/CalendarGrid'
import {Header} from './calendar-components/Header'
import {SettingData} from './calendar-components/SettingData.jsx'
import './calendar-components/styleGrid.css'
import './calendar-components/styleCalendarPage.css'
import moment from 'moment'

const Calendar = ({data}) => {
    moment.updateLocale('en', {week: {dow: 1}});
    const startDay=moment().startOf('month').startOf('week')
    return (
        <div>
            <Header/>
            <SettingData/>
            <CalendarGrid startDay={startDay}/>
        </div>
    )
}

export default Calendar
