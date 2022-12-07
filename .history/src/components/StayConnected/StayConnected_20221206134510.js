import './_stay-connected.scss'
import FB from "../../assets/fb.png";
import LI from "../../assets/linkedin.png";
import { Heading } from "@chakra-ui/react";
import { AppButton } from "../../components/AppButton/AppButton";
import Class from "../../assets/class.png";
import Compute from "../../assets/compute.png";
import Grad from "../../assets/grad.png";
import { Button, ButtonGroup } from "@chakra-ui/react";

export const StayConnected =()=>{
    return (
      <>
        {" "}
        <div className="col-md-12 connected">
          <div className="col-md-5">
            <Heading as="h6" size="lg">
              Stay Connected
            </Heading>
          </div>
         
          <div className="col-md-12 flexy socials">
            <div className="col-md-2">&nbsp;</div>
            <div className="col-md-3">
              <img
                className="col-md-12 imgCaro"
                src={FB}
                alt="Scholar"
                width="100%"
              />
              <Heading as="h6" size="sm">
                Follow us on Facebook
              </Heading>
            </div>
            <div className="col-md-3">&nbsp;</div>

            <div className="col-md-3">
              <div className="col-md-12 linked">
                <img
                  className="col-md-12 imgCaro "
                  src={LI}
                  alt="Scholar"
                  width="100%"
                />
              </div>
              <Heading as="h6" size="sm">
                Connect with us on Linkedin
              </Heading>
            </div>
          </div>
        </div>
      </>
    );
}