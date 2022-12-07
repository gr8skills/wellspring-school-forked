import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import "./_app-tab.scss";

export const AppTab = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 flexy">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">
            <Tabs variant="unstyled">
              <TabList>
                <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                  Academic Excellence
                </Tab>
                <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                  Physical Facilities
                </Tab>
                <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                  School Curriculum
                </Tab>
                <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                  Co-corricular
                </Tab>
                <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>
                  Extra-curricular
                </Tab>
                <Tab _selected={{ color: "white", bg: "#5EC0FB" }}>LBTC</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
