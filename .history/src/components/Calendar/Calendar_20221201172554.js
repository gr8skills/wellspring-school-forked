import "./"
export const Calendar = () => {
  return (
    <>
      <div className="col-md-12 flexy calendar-container">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6">
          <div className="calendar-box">
            <h2 className="calendar-month">Nov</h2>
            <h1 className="calendar-day">10</h1>
            <h1 className="calendar-year">2022</h1>
          </div>
          <h1>Open Day</h1>
          <p>10:00am - 3:00pm</p>
        </div>
      </div>
    </>
  );
};
