import React from 'react'
import './Calendar.css'
// import { useKeyPress } from '../../hook/useKeyPress';

function CalendarTopBar({today, prevHandler, todayHandler, nextHandler}) {
  // const isPressPrev = useKeyPress('ArrowLeft');
  // const isPressnext = useKeyPress('ArrowRight');
  // console.log(isPressPrev)
  // console.log(isPressnext)
  return (
    <div className='DivWrapper'>
      <div className='TextWrapper'>
        <span><b>{today.format('MMMM')}</b></span>
        <span>{today.format('YYYY')}</span>
      </div>
      
      {/* <div className='Display_mode'>
        <button>Day</button>
        <button>Week</button>
        <button className='selected-day'>Month</button>
        <button>Year</button>
      </div> */}
      <div className='ButtonWrapper'>
        <button onClick={prevHandler}> &lt; </button>
        <button onClick={todayHandler} className='ToDayBatton'><b>ToDay</b></button>
        <button onClick={nextHandler}> &gt; </button>
      </div>
    </div>
  )
}

export default CalendarTopBar