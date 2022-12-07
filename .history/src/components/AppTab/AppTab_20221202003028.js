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
                <Tab _selected={{ color: "white", bg: "blue.500" }}>Academic Excellence</Tab>
                <Tab _selected={{ color: "white", bg: "green.400" }}>Physical Facilities</Tab>
                <Tab _selected={{ color: "white", bg: "green.400" }}>Sch</Tab>
                <Tab _selected={{ color: "white", bg: "green.400" }}>Physical Facilities</Tab>
                <Tab _selected={{ color: "white", bg: "green.400" }}>Physical Facilities</Tab>
                <Tab _selected={{ color: "white", bg: "green.400" }}>Physical Facilities</Tab>
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
