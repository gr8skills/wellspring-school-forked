import "./_calendar.scss";
export const Calendar = (props) => {
  return (

      <div className="col-md-12 calendar-container">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6" >
          <div className="calendar-box">
            <h2 className="calendar-month">{props.month}</h2>
            <h1 className="calendar-day">
              <strong>{props.day}</strong>
            </h1>
            <h1 className="calendar-year">{props.year}</h1>
          </div>
          <h1 className="calendar-description">
            <strong>{props.event}</strong>
          </h1>
          <p>{props.time}</p>
        </div>
      </div>
    
  );
};
