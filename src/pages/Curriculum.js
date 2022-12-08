import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { BeyondClassroom } from "./BeyondClassroom/BeyondClassroom";
import { CoCurricular } from "./CoCurriculum/CoCurricular";
import { ExtraCurricular } from "./ExtraCurricular/ExtraCurricular";

import { NationalCurriculum } from "./NationalCurriculum/NationalCurriculum";


function Curriculum() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/curriculum/national-curriculum" element={<NationalCurriculum />} exact />
          <Route path="/curriculum/co-curricular" element={<CoCurricular/>} exact />
          <Route path="/curriculum/extra-curricular" element={<ExtraCurricular />} exact />
          <Route path="/curriculum/beyond-classroom" element={<BeyondClassroom />} exact />
         
        </Routes>
      </Router>
    </>
  );
}

export default Curriculum;
