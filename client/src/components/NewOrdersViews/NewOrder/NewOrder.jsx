import React, { useEffect, useState } from 'react';
import NewOrderServices from '../NewOrderServices/NewOrderServices';
import NewOrderSpecialists from '../NewOrderSpecialists/NewOrderSpecialists';
import Calendar from 'react-calendar';
import './NewOrder.css';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendarOrdersAC } from '../../../redux/ActionCreators/ordersAC';
import CalendarOrders from '../CalendarOrders/CalendarOrders';
import { Link } from 'react-router-dom';
function NewOrder({ serv_id, spec_id }) {
  const queryParams = new URLSearchParams(window.location.search);
  const serviceid = serv_id ? serv_id : queryParams.get("serviceid");
  const specid = spec_id ? spec_id : queryParams.get("specid");

  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();

  const calendarorders = useSelector(state => state.orders.calendarorders);
  const currentUser = useSelector(state => state.users.user);

  useEffect(() => {
    fetch('/orders/getordersforcalendar', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        serviceid,
        specid,
        date: value,
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          //setActiveOrders(data.orders);
          dispatch(setCalendarOrdersAC(data.orders));
        }
      })
  }, [value]);
  console.log(currentUser.id);
  return (
    <div>
      {currentUser.id ?
        <div>
          <div>
            <h1>
              Выберите услугу, мастера и желаемое время.
            </h1>
          </div>
          <div className="orderTopContainer">
            <div>
              <NewOrderServices serviceid={serviceid} specid={specid} />
            </div>
            <div>
              <NewOrderSpecialists specid={specid} serviceid={serviceid} />
            </div>
          </div>
          {
            specid && serviceid &&
            <div className="orderCalendarContainer">
              <Calendar
                minDate={new Date()}
                onChange={onChange}
                value={value}
              />
              <div className="calendarOrdersContainer">
                {specid && serviceid && calendarorders &&
                  <div>
                    <CalendarOrders calendarorders={calendarorders} date={value} serviceid={serviceid} specid={specid} />
                  </div>
                }
              </div>
            </div>
          }
        </div>
        :
        <div className="authorizeFirst whiteBackGround">
          <Link to='/login'>
            Авторизуйтесь сначала!
          </Link>
        </div>
      }
    </div>
  );
}

export default NewOrder;
