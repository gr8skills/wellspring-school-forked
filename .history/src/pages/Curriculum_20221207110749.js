import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import { NationalCurriculum } from "./NationalCurriculum/NationalCurriculum";


function Curriculum() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/curriculum/national-curriculum" element={<NationalCurriculum />} exact />
          <Route path="/curriculum/national-curriculum" element={<NationalCurriculum />} exact />
          {/* <Route path="/about/proprietor-message" element={<ProprietorMessage />} exact />
          <Route path="/about/vision" element={<VMCV />} exact />
          <Route path="/about/discipline" element={<Discipline />} exact />
          <Route path="/about/school-song" element={<SchoolSong />} exact />
          <Route path="/about/teaching-team" element={<TeachingTeam />} exact /> */}
          
        </Routes>
      </Router>
    </>
  );
}

export default Curriculum;
