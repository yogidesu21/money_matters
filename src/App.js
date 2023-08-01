import {Switch, Route} from 'react-router-dom'

import NotFound from './components/NotFound'

import Dashboard from './components/Dashboard'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
