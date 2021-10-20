import NavBar from './components/NavBar';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';
import Home from './components/Home'


function App() {
  return (
    <div className="main">
      <NavBar />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/RecentWork">
          <RecentWork />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
