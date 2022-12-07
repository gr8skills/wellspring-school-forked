import './_sliders.scss'

export const Sliders=(props)=>{
    return (
      <>
        <div className="col-md-12 slider-header">
          <h1>{props.header}</h1>
        </div>
        <div className="col-md-12 flexy">
            <div class>&nbsp;</div>
        </div>
      </>
    );
}