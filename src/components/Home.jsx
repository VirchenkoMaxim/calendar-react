import React from "react";
import Calendar from "./common/Calendar/Calendar";
import "../styles/Home.scss";

const Home = () => {
  return (
    <main className="container-fluid">
      <div className="row ">
        <div className="col-xl-7 col-lg-6 col-12 content-wrapper ">
          <div className="col-12 col-md-8 offset-0 offset-md-4 text-wrapper">
            <h1 className="title"> Choose the day for the meeting</h1>
            <p className="text">
              We encourage you to book your appointment online. This will save
              you time.
            </p>
          </div>
        </div>
        <div className="calendar-wrapper col-xl-5 col-lg-6 col-12 ">
          <Calendar />
        </div>
      </div>
    </main>
  );
};
export default Home;
