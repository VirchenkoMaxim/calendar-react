import React, { useState } from "react";
import * as calendar from "./_calendar";
import "./Calendar.scss";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { setCalendarData } from "../../../store/actions";
import { ModalWindow } from "../ModalWindow/ModalWindow";

const defaultData = {
  date: new Date(),
  years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December",
  ],
  weekDayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};
const Calendar = () => {
  const [date, setDate] = useState(defaultData.date);
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelecterdDate] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const year = date.getFullYear();
  const month = date.getMonth();

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    setDate(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    setDate(date);
  };

  const handleDayClick = (date) => {
    setSelecterdDate(date);
    dispatch(
      setCalendarData(
        monthNames[date.getMonth()],
        date.getDate(),
        weekDayNames[date.getDay()]
      )
    );
    setModalShow(true);
    return;
  };

  const { monthNames, weekDayNames } = defaultData;
  const monthData = calendar.getMonthData(year, month);
  return (
    <div className="calendar">
      <div className="calendar_header">
        <button className="calendar_btn" onClick={handlePrevMonthButtonClick}>
          {""}
        </button>
        <div>
          {monthNames[month]} {year}
        </div>
        <button
          className="calendar_btn calendar_btn-next"
          onClick={handleNextMonthButtonClick}>
          {""}
        </button>
      </div>
      <table className="calendar_table">
        <tbody>
          {monthData.map((week, index) => (
            <tr key={index} className="week">
              {week.map((date, index) =>
                date ? (
                  <td
                    key={index}
                    className={classnames("day", {
                      today: calendar.areEqual(date, currentDate),
                      selected: calendar.areEqual(date, selectedDate),
                    })}
                    onClick={() => handleDayClick(date)}>
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={index} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="calendar_footer">
        {weekDayNames.map((name, index) => (
          <div key={index}>{name[0]}</div>
        ))}
      </div>
      <ModalWindow show={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

export default Calendar;
