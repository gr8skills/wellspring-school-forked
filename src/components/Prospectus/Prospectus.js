import { AppButton } from '../AppButton/AppButton';
import './_prospectus.scss'
import Read from "../../assets/read2.png";



export const Prospectus = () =>{
return (
  <>
    <div className="col-md-12 prospectus-container flexy">
      <div className="col-md-1">&nbsp;</div>
      <div className="col-md-10 prospectus flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-4">
          <img className="col-md-12 imgCaro" src={Read} alt="Scholar" />
        </div>
        <div className="col-md-1">&nbsp;</div>

        <div className="col-md-5">
          <h4>Are you looking for the perfect school for your children?</h4>
          <p>Take a look at our</p>
          <h1>Wellspring College Prospectus</h1>
          <AppButton text="Download Now" />
        </div>
      </div>
    </div>
  </>
);
}