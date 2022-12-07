import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import NavBar from './components/Navbar/Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Home } from './pages/Home/Home';

function App() {
  return (
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route
    //       render={({ location }) => (
    //         <TransitionGroup>
    //           <CSSTransition key={location.key} timeout={450} classNames="fade">
    //             <Routes>
    //               <Route path="/" element={<Home/>} exact />
    //             </Routes>
    //           </CSSTransition>
    //         </TransitionGroup>
    //       )}
    //     />
    //   </Routes>

    // </Router>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
