import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import JobIteamDetails from './components/JobIteamDetails'
import Jobs from './components/Jobs'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/jobs" component={Jobs} />
        <ProtectedRoute exact path="/jobs/:id" component={JobIteamDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
