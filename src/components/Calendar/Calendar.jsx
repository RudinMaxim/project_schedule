import React, { useState } from 'react'
import moment from 'moment'
import CalendarTopBar from "./CalendarTopBar";
import CalendarGrid from './CalendarGrid';
import './Calendar.css'
import CalendarTitle from './CalendarTitle';

function Calendar() { 
    moment.updateLocale('en', {week: {dow:1}})
    // const today = moment();
    const [today, setToday] = useState(moment());
    const startDay = today.clone().startOf('month').startOf('week');
    
    // window.moment = moment;
    
    const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'))
    const todayHandler = () => setToday(moment())
    const nextHandler = () => setToday(prev => prev.clone().add(1, 'month'))
    return (
        <div className='Calendar'>
            <CalendarTitle/>
            <CalendarTopBar 
                today={today}
                prevHandler={prevHandler}
                todayHandler={todayHandler}
                nextHandler={nextHandler}
            />
            <CalendarGrid 
                startDay={startDay} 
                today={today}
            />
        </div>
    );
}
export default Calendar