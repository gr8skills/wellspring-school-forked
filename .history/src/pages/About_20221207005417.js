import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutUs } from "./AboutUs/AboutUs";
import { Discipline } from "./Discipline/Discipline";
import { ProprietorMessage } from "./ProprietorMessage/ProprietorMessage";
import { SchoolSong } from "./SchoolSong/SchoolSong";
import { TeachingTeam } from "./TeachingTeam/TeachingTeam";
import { VMCV } from "./Vision/Vision";

function About() {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/about/about-us" element={<AboutUs />} exact />
          <Route path="/about/proprietor-message" element={<ProprietorMessage />} exact />
          <Route path="/about/vision" element={<VMCV />} exact />
          <Route path="/about/discipline" element={<Discipline />} exact />
          <Route path="/about/school-song" element={<SchoolSong />} exact />
          <Route path="/about/teaching-team" element={<TeachingTeam />} exact />
          
        </Routes>
      </Router>
    </>
  );
}

export default About;
