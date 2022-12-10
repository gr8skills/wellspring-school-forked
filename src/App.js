import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { ProprietorMessage } from './pages/ProprietorMessage/ProprietorMessage';
import About from './pages/About';
import { VMCV } from './pages/Vision/Vision';
import { Discipline } from './pages/Discipline/Discipline';
import { SchoolSong } from './pages/SchoolSong/SchoolSong';
import { TeachingTeam } from './pages/TeachingTeam/TeachingTeam';
import { Admission } from './pages/Admission/Admission';
import { NationalCurriculum } from './pages/NationalCurriculum/NationalCurriculum';
import { CoCurricular } from './pages/CoCurriculum/CoCurricular';
import { ExtraCurricular } from './pages/ExtraCurricular/ExtraCurricular';
import { BeyondClassroom } from './pages/BeyondClassroom/BeyondClassroom';
import { PhysicalFacilities } from './pages/PhysicalFacilities/PhysicalFacilities';
import { Sports } from './pages/Sports/Sports';
import { BoardingFacilities } from './pages/BoardingFacilities/BoardingFacilities';
import { HealthCare } from './pages/HealthCare/HealthCare';
import { Gallery } from './pages/Gallery/Gallery';
import { SchoolLife } from './pages/SchoolLife/SchoolLife';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Blog } from './pages/Blog/Blog';
import { MainBlogPost } from './pages/Blog/MainBlogPost copy/MainBlogPost';
import { TopNav } from './components/Navbar/TopNav';
import useSticky from "./hooks/useSticky.js";

function App() {
    const { isSticky, element } = useSticky();

  return (
    <BrowserRouter>
      <TopNav element={element} />

      <NavBar sticky={isSticky} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/proprietor-message"} element={<ProprietorMessage />} />
        <Route path={"/vision"} element={<VMCV />} />
        <Route path={"/discipline"} element={<Discipline />} />
        <Route path={"/school-song"} element={<SchoolSong />} />
        <Route path={"/teaching-team"} element={<TeachingTeam />} />
        <Route path={"/admission"} element={<Admission />} />
        <Route path={"/national-curriculum"} element={<NationalCurriculum />} />
        <Route path={"/co-curricular"} element={<CoCurricular />} />
        <Route path={"/extra-curricular"} element={<ExtraCurricular />} />
        <Route path={"/beyond-classroom"} element={<BeyondClassroom />} />
        <Route path={"/physical-facilities"} element={<PhysicalFacilities />} />
        <Route path={"/sports"} element={<Sports />} />
        <Route path={"/boarding-facilities"} element={<BoardingFacilities />} />
        <Route path={"/health-catering"} element={<HealthCare />} />
        <Route path={"/gallery"} element={<Gallery />} />
        <Route path={"/school-life"} element={<SchoolLife />} />
        <Route path={"/contact-us"} element={<ContactUs />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/main-blog-post"} element={<MainBlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
