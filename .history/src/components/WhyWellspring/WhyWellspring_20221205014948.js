
export const WhyWellspring = (props) => {
  return (
    <>
      <div className="col-md-12 flexy ">
        <div className="col-md-5">

          <img className="col-md-12 imgCaro" src={props.img} alt="Scholar" />
        </div>
        <div className="col-md-6">
          <h1>{props.header}</h1>
          <p>
            {props.content}
          </p>
        </div>
      </div>
    </>
  );
};
