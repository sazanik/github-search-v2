import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {NavbarComp} from "./components/Navbar/Navbar";

import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {Profile} from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/profile/:name'  component={Profile}/>
      </Switch>

    </Router>
  )
}

export default App
