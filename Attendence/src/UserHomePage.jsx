import React from "react";
import "./App.css";

function UserHomePage() {
  const date = new Date();
  return (
    <>
      <div className="container mt-9">
        <div className="contain">
          <h1>User Attendance</h1>
          <div className="userattend">
            <form className="mt-4">
              <div className="username">
                <p>User Name</p>
              </div>

              <div className="todaydate">
                <p>{date.toLocaleDateString()}</p>
              </div>

              <div className="button">
                <button className="btn btn-success me-2">Present</button>
                <button className="btn btn-danger">Leave</button>
              </div>
            </form>
          </div>

          <div className="totaldate">
            <div className="attendedate">
              <h2>55</h2>
              <p>Total Attened Date</p>
            </div>

            <div className="attendedate">
              <h2>55</h2>
              <p>Total leave Date</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
