import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Routes>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Routes>
                  <Route path="/" element={<Home/>} exact />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Routes> */}
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
