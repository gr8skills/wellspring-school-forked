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

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/about-us"} element={<AboutUs />} />
        <Route path={"/proprietor-message"} element={<ProprietorMessage />} />
        <Route path={"/vision"} element={<VMCV />} />
        <Route path={"/discipline"} element={<Discipline />} />
        <Route path={"/school-song"} element={<SchoolSong />} />
        <Route path={"/teaching-team"} element={<TeachingTeam />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
