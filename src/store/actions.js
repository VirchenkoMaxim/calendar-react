import { CALENDAR_DATA } from "./reducer";

export const setCalendarData = (month, day, weekDay) => ({
  type: CALENDAR_DATA,
  payload: { month, day, weekDay },
});
