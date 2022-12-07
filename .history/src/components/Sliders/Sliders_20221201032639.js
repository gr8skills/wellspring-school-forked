import './_sliders.scss'

export const Sliders=(props)=>{
    return (
      <>
        <div className="col-md-12 slider-header">
          <h1>{props.header}</h1>
        </div>
        <div className="col-md-12 flexy">
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-4">
            <img
              className="col-md-12 imgCaro"
              src={props.sliderImg}
              alt="Scholar"
            />
          </div>
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-5">
            <h1>{</h1>
            <p>{props.message}</p>
          </div>
        </div>
      </>
    );
}