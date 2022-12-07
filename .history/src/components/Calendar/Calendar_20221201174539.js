import "./_calendar.scss";
export const Calendar = (props) => {
  return (
    <>
      <div className="col-md-12 flexy calendar-container">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <div className="calendar-box">
            <h2 className="calendar-month">{}</h2>
            <h1 className="calendar-day">
              <strong>10</strong>
            </h1>
            <h1 className="calendar-year">2022</h1>
          </div>
          <h1 className="calendar-description">
            <strong>Open Day</strong>
          </h1>
          <p>10:00am - 3:00pm</p>
        </div>
      </div>
    </>
  );
};
