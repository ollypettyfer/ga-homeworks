import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

import WineIndex from './components/WineIndex'
import WineShowPage from './components/WineShowPage'
import Register from './components/auth/register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/wines/:id" component={WineShowPage}></Route>
        <Route path="/wines" component={WineIndex}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
