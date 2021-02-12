
import './App.css'
import React from 'react'
import { List } from './list'
import { View } from './view'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  

  return (
    <Router>
      <div style={{background: 'red', color: 'white', padding: 20, marginBottom: 20}}>
        <Link to='/'>Home</Link>
      </div>
      <Switch>
        <Route exact path='/'>
          <List />
        </Route>
        <Route path='/view/:id/:blah'>
          <View />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
