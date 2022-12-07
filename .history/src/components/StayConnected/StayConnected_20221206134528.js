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
          <div classNa>
            {" "}
            <div className="channel">
              <Heading as="h6" size="md" style={{ marginBottom: "10px" }}>
                @Wellspringcollege
              </Heading>
              <p style={{ marginBottom: "30px" }}>
                Watch all of our videos on our YouTube Channel
              </p>
              <AppButton text="Subscribe to our Channel" />
            </div>
            <div className="col-md-12 flexy" style={{ marginTop: "40px" }}>
              <div className="col-md-6" style={{ marginRight: "15px" }}>
                <img
                  className="col-md-12 imgCaro"
                  src={Class}
                  alt="Scholar"
                  width="80%"
                />
              </div>
              <div className="col-md-6">
                <img
                  className="col-md-12 imgCaro"
                  src={Compute}
                  alt="Scholar"
                  width="80%"
                />
              </div>
            </div>
            <Button>Follow us on instagram</Button>
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