import './_sliders.scss'

export const Sliders=(props)=>{
    return (
      <>
        <div className="col-md-12 slider-header">
          <h1>{props.header}</h1>
        </div>
        <div className="col-md-12 flexy">
            <div className="col-md">&nbsp;</div>
        </div>
      </>
    );
}