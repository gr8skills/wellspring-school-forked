import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { BoardingFacilities } from "./BoardingFacilities/BoardingFacilities";
import { HealthCare } from "./HealthCare/HealthCare";
import { PhysicalFacilities } from "./PhysicalFacilities/PhysicalFacilities";
import { Sports } from "./Sports/Sports";


function About() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/facilities/physical-facilities" element={<PhysicalFacilities/>} exact />
          <Route path="/facilities/sports" element={<Sports />} exact />
          <Route path="/facilities/boarding-facilities" element={<BoardingFacilities />} exact />
          <Route path="/facilities/health-catering" element={<HealthCare />} exact />
          
          
        </Routes>
      </Router>
    </>
  );
}

export default About;
