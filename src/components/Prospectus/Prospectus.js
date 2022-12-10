import { AppButton } from '../AppButton/AppButton';
import './_prospectus.scss'
import Read from "../../assets/read2.png";
import Cheque from "../../assets/cheque.png";



export const Prospectus = () =>{
return (
  <>
    <div className="col-md-12 prospectus-container flexy">
      <div className="col-md-1">&nbsp;</div>
      <div className="col-md-10 prospectus flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-4 flip-box">
          <div className="col-md-12 flip-box-inner">
            <img
              className="col-md-12 imgCaro flip-box-front"
              src={Read}
              alt="Scholar"
            />
            <img
              className="col-md-12 imgCaro flip-box-back"
              src={Cheque}
              alt="Scholar"
            />
          </div>
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