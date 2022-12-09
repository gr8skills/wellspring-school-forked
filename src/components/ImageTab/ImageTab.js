import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { News } from "../News/News";
import { WhyWellspring } from "../WhyWellspring/WhyWellspring";
import Gift from "../../assets/gift2.png";
import Jersy from "../../assets/jersy2.png";
import Talk from "../../assets/talk.png";
import Pose from "../../assets/pose.png";
import Guiter from "../../assets/guiter.png";
import Cheque from "../../assets/cheque.png";
import Compute from "../../assets/computer-room.png";
import Sing from "../../assets/sing.png";
import Lab from "../../assets/lab2.png";
import Lib from "../../assets/read2.png";
import Class from "../../assets/mask1.png";
import Medal from "../../assets/medal.png";
import Logo from "../../assets/logo2.png";

import "./_image-tab.scss";

export const ImageTab = () => {
  return (
    <>
      <div className="col-md-12 flexy">
        <div className="col-md-12 image-tab">
          <img
            className="col-md-12 imgCaro tab-logo"
            src={Logo}
            alt="Scholar"
          />

          <Tabs variant="unstyled">
            <TabList className="tabb">
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                Student Life
              </Tab>
              <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                Admissions
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="col-md-12 flexy">
                  <div className="col-md-2 sect1">
                    <img
                      className="col-md-5 imgCaro shift11 mt1"
                      src={Jersy}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift1 mt1"
                      src={Cheque}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift11 mt1"
                      src={Gift}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-8">&nbsp;</div>

                  <div className="col-md-2 sect2">
                    <img
                      className="col-md-12 imgCaro shift22 mt1"
                      src={Pose}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift2 mt1"
                      src={Talk}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift22 mt1"
                      src={Guiter}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="col-md-12 flexy content2">
                  <div className="col-md-2 sect1">
                    <img
                      className="col-md-12 imgCaro shift33 mt1"
                      src={Guiter}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift3 mt1"
                      src={Class}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift33 mt1"
                      src={Jersy}
                      alt="Scholar"
                    />
                  </div>
                  <div className="col-md-8">&nbsp;</div>

                  <div className="col-md-2 sect2">
                    <img
                      className="col-md-12 imgCaro shift4 mt1"
                      src={Talk}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift44 mt1"
                      src={Gift}
                      alt="Scholar"
                    />
                    <img
                      className="col-md-12 imgCaro shift4 mt1"
                      src={Cheque}
                      alt="Scholar"
                    />
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};
