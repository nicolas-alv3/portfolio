/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { Switch, Route } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
// import Home from './components/Home';
// import Greetings from './components/Greetings';
// import Education from './components/Education';
// import Languages from './components/Languages';
// import WorkProjects from './components/WorkProjects';
// import PersonalProjects from './components/PersonalProjects';
// import End from './components/End';
import MainApp from './components/MainApp/MainApp';
import './style/MainStyle/root.css'
import 'semantic-ui-css/semantic.min.css'


import './App.css';
import OnWeekends from './components/OnWeekends';

function App() {
  const [name, setName] = React.useState("")

  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/greetings" render={(props) => <Greetings name={name} {...props} />} />
    //     <Route exact path="/education" render={(props) => <Education {...props} />} />
    //     <Route exact path="/languages" render={(props) => <Languages {...props} />} />
    //     <Route exact path="/workProjects" render={(props) => <WorkProjects {...props} />} />
    //     <Route exact path="/onWeekends" render={(props) => <OnWeekends {...props} />} />
    //     <Route exact path="/personalProjects" render={(props) => <PersonalProjects {...props} />} />
    //     <Route exact path="/end" render={(props) => <End name={name} {...props} />} />
    //     <Route path="/" render={(props) => <Home name={name} setName={(e) => setName(e.target.value)} {...props} />} />
    //   </Switch>
    // </BrowserRouter>
    <MainApp />
  );
}

export default App;
