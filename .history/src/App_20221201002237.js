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

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Routes>
                  <Route path="/" component={} exact />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
