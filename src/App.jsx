/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Greetings from './components/Greetings';
import Education from './components/Education';
import 'semantic-ui-css/semantic.min.css'
import Languages from './components/Languages';
import WorkProjects from './components/WorkProjects';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/greetings" render={(props) => <Greetings {...props} />} />
        <Route exact path="/education" render={(props) => <Education {...props} />} />
        <Route exact path="/languages" render={(props) => <Languages {...props} />} />
        <Route exact path="/workProjects" render={(props) => <WorkProjects {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
