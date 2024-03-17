import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ServerInfo from './views/server-info'
import Characters from './views/characters'
import Science from './views/science'
import History from './views/history'
import Crew from './views/crew'
import SeniorStaff from './views/senior-staff'
import Departments from './views/departments'
import Command from './views/command'
import CharacterGuide from './views/character-guide'
import Home from './views/home'
import Information from './views/information'
import Template from './views/template'
import Operations from './views/operations'
import Tkai from './views/tkai'
import ProwlerClass from './views/prowler-class'
import Guides from './views/guides'
import MAIN from './views/main'
import Rules from './views/rules'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ServerInfo} exact path="/server-info" />
        <Route component={Characters} exact path="/characters" />
        <Route component={Science} exact path="/science" />
        <Route component={History} exact path="/history" />
        <Route component={Crew} exact path="/crew" />
        <Route component={SeniorStaff} exact path="/senior-staff" />
        <Route component={Departments} exact path="/departments" />
        <Route component={Command} exact path="/command" />
        <Route component={CharacterGuide} exact path="/character-guide" />
        <Route component={Home} exact path="/" />
        <Route component={Information} exact path="/information" />
        <Route component={Template} exact path="/template" />
        <Route component={Operations} exact path="/operations" />
        <Route component={Tkai} exact path="/tkai" />
        <Route component={ProwlerClass} exact path="/prowler-class" />
        <Route component={Guides} exact path="/guides" />
        <Route component={MAIN} exact path="/main" />
        <Route component={Rules} exact path="/rules" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
