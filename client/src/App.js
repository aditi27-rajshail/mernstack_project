import React, { createContext, useReducer } from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css'
import ErrorPage from './Components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.css';
import Logout from './Components/Logout';
import { initialState, reducer } from './Reducer/UseReducer';
export const UserContext= createContext();
const Routing=()=>{
  return(
    <>
    <Router>
    <NavBar/>
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/about" component = {About}/>
      <Route exact path = "/contact" component = {Contact}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/signup" component = {Signup}/>
      <Route exact path = "/logout" component = {Logout}/>
      <Route component={ErrorPage} />
    </Switch>
    </Router>
    </>
  )
}
const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
  return (
   
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Routing/>
    </UserContext.Provider>
    </>
  )
}

export default App
