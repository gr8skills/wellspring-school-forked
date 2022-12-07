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
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch>
                <Route path="/" component={HeroSection} exact />
                <Route path={"/about"} component={About} />
                <Route path={"/academics"} component={Academics} />
                <Route path={"/learn"} component={Learn} />
                <Route path={"/school"} component={School} />
                <Route path={"/contact"} component={Contact} />
                <Route path={"/gallery"} component={Gallery} />
                <Route path={"/history"} component={History} />
                <Route path={"/message"} component={HumanResources} />
                <Route path={"/principal"} component={PrincipalsDesk} />
                <Route path={"/apply"} component={Apply} />
                <Route path={"/fees"} component={AgeCons} />
                <Route path={"/transfer"} component={Result} />
                <Route path={"/senior"} component={Eyfs} />
                <Route path={"/junior"} component={Nursery} />
                <Route path={"/school"} component={Curriculum} />
                <Route path={"/News"} component={News} />

                <Route path="*" component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
