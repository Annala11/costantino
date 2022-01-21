import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './CalendarOrders.css';
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { useHistory } from 'react-router-dom';

function CalendarOrders({ serviceid, specid, date }) {
  const calendarorders = useSelector(state => state.orders.calendarorders);//надо использовать при отрисовке
  const services = useSelector(state => state.services.services);
  const service = services.find((serv) => serv.id === +serviceid);
  const [chosenInterval, setChosenInterval] = useState(false);
  const history = useHistory();

  const intervals = [];
  for (let i = 0; i <= 20; i += 1) {
    intervals.push(20 + i);
  }
  useEffect(() => {
    setChosenInterval(false);
  }, [date])
  function buildTime(interval) {
    return `${Math.floor(interval / 2)}:${(interval % 2) === 0 ? '00' : '30'}`;
  }
  function setOrderInterval(event) {
    const interval = event.target.dataset.intervalid;
    console.log(interval === chosenInterval);
    if (interval === chosenInterval) {
      setChosenInterval(false);
    } else if (!event.target.classList.contains('inactiveInterval')) {
      setChosenInterval(interval);
    }
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
    }).then(res => res.json())
      .then((data) => {
        store.addNotification({
          title: "Поздравляем!",
          message: "Запись на услугу успешно осуществлена! Инфорацию о записи можете найти на страничке вашего профиля.",
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
        history.push(window.location.search + '&finished=1');
        //window.location.reload();
      })
  }

  function checkIntervalValid(interval) {
    let valid = true;
    //console.log(calendarordersintervals,'calendarordersintervals')
    if ((interval + service?.interval > 40)) {
      valid = false;
    }
    if (calendarorders.length) {
      calendarorders.forEach(ord => {
        if (interval >= ord.startinterval && interval < ord.startinterval + ord.interval
          || interval + service?.interval > ord.startinterval
          && interval + service?.interval < ord.startinterval + ord.interval
        ) {
          valid = false;
        }
      });
    }
    if (interval === 32) {
      console.log(valid);
    }
    return valid;
  }

  return (
    <>
      <div className="calendarInts">
        {
          intervals.length &&
          intervals.map((int) => <span className={
            'calendarInterval' +
            ((+chosenInterval <= int && int < +chosenInterval + service?.interval && checkIntervalValid(service.interval)) ? ' chosenInterval' : '') +
            (checkIntervalValid(int) ? '' : ' inactiveInterval')
          } key={int} data-intervalid={int} onClick={setOrderInterval}>{buildTime(int)}</span>)
        }
      </div>
      <div className="calendarButtonContainer">
        {chosenInterval &&
          <Button className="mainButton" onClick={handleOrder}>Записаться</Button>
        }
      </div>
    </>
  )
}

export default CalendarOrders;
