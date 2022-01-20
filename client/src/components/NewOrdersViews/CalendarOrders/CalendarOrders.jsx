import { Button } from '@mui/material';
import React, { useState } from 'react';
import 'react-notifications-component/dist/theme.css'
import './CalendarOrders.css';
import { store } from 'react-notifications-component';

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
      .then(res => res.json())
      .then((data) => {
        store.addNotification({
          title: "Поздравляем!",
          message: "Запись на услугу успешно осуществлена!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
        console.log(data);
      })
  }



  return (
    <div>
      <div style={{ position: 'relative' }}>
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
      </div>
      <div style={{ padding: "50px", display: "none" }}>
        Запись на услугу осуществлена
      </div>
    </div>
  )
}

export default CalendarOrders;
