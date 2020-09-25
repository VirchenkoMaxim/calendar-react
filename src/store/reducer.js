export const CALENDAR_DATA = "CALENDAR_DATA";

let initialState = {
  month: "",
  day: null,
  weekDay: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CALENDAR_DATA:
      return {
        month: action.payload.month,
        day: action.payload.day,
        weekDay: action.payload.weekDay,
      };
    default:
      return state;
  }
};
