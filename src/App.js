import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {NavbarComp} from "./components/NavbarComp";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert";
import {Container} from "react-bootstrap";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";


function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <NavbarComp/>
          <Container>
            <Alert alert={{text: 'Alert'}}/>
          </Container>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/profile/:name' component={Profile}/>
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
