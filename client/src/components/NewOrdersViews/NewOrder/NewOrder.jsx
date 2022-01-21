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
  const finished = queryParams.get("finished");

  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();

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
          dispatch(setCalendarOrdersAC(data.orders));
        }
      })
  }, [value]);
  return (
    <div>
      {currentUser.id ?
        <div>
          <div>
            <h1 style={{color:"#FFE4B5"}}>
              Выберите услугу, мастера и желаемое время.
            </h1>
          </div>
          <div className="orderTopContainer">
            <div>
              <NewOrderServices serviceid={serviceid} specid={specid} />
            </div>

            {serviceid ?
              <div>
                <NewOrderSpecialists specid={specid} serviceid={serviceid} />
              </div>
              :
              <div style={{ backgroundColor: "#FFE4B5" }}>
                <img className="startOrderImg" src="/common/startorder.png" />
              </div>
            }
          </div>
          {
            specid && serviceid &&
            <>
              <div className="orderCalendarContainer">
                <Calendar
                  minDate={new Date()}
                  onChange={onChange}
                  value={value}
                />
                <div className="calendarOrdersContainer">
                  {specid && serviceid && finished !== '1' ?
                    <>
                      <div>
                        <CalendarOrders date={value} serviceid={serviceid} specid={specid} />
                      </div>

                      <div className="orderLegenda whiteBackGround">
                        <div>
                          <span className="orderLegendaSquare calendarInterval"></span> - Время свободно для записи
                        </div>
                        <div>
                          <span className="orderLegendaSquare calendarInterval inactiveInterval"></span> - Время недоступно
                        </div>
                      </div>
                    </>
                    :
                    <div className="orderCompleteBox">
                      Запись успешно завершена!<br/><br/>
                      Пройдите на <Link to="/">Главную страницу</Link> или <Link to="/neworder">выберите новую услугу</Link>.
                      </div>
                  }
                </div>
              </div>
            </>
          }
        </div>
        :
        <div className="authorizeFirst whiteBackGround">
          <Link to='/login'>
            Авторизуйтесь, чтобы осуществить запись на услугу
          </Link>
          <br/>
          <br/>
          <img className="startOrderImg" src="/common/startorder.png" />
        </div>
      }
    </div>
  );
}

export default NewOrder;
