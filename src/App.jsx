/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';
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
import './style/MainStyle/root.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import 'react-chat-widget/lib/styles.css';
import Chat from './components/MainApp/Chat';
import { initI18n } from "./i18n.js";


function App() {
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
    
    <>
      <Suspense fallback={<b>Loading</b>}>
        <MainApp />
        <Chat/>
      </Suspense>
    </>
    
  );
}
initI18n();

export default App;
