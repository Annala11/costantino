import { Button } from '@mui/material';
import React, { useState } from 'react';
import './CalendarOrders.css'

function CalendarOrders({ serviceid, specid, date }) {
  //const calendarorders = useSelector(state => state.orders.calendarorders);//надо использовать при отрисовке
  const [chosenInterval, setChosenInterval] = useState(false);
  const intervals = [];
  for (let i = 0; i <= 17; i += 1) {
    intervals.push(20 + i);
  }
  function buildTime(interval) {
    return `${Math.floor(interval / 2)}:${(interval % 2) === 0 ? '00' : '30'}`;
  }
  function setOrderInterval(event) {
    const interval = event.target.dataset.intervalid;
    setChosenInterval(interval);
  }

  function handleOrder() {
    fetch('/orders/makeorder', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        interval: chosenInterval,
        serviceid,
        specid,
        date,
      })
    })
  }
  return (
    <>
      <div className="calendarInts">
        {
          intervals.length &&
          intervals.map((int) => <span className={'calendarInterval' + (+chosenInterval === int ? ' chosenInterval' : '')} key={int} data-intervalid={int} onClick={setOrderInterval}>{buildTime(int)}</span>)
        }
      </div>
      <div className="calendarButtonContainer">
        {chosenInterval &&
          <Button className="commonButton" onClick={handleOrder}>Записаться</Button>
        }
      </div>
    </>
  )
}

export default CalendarOrders;
