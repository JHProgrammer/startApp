import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom";
import { About } from '../Components/AboutUs/About';
import { Login } from '../Components/Login/Login';
import { Main } from '../Components/Main/Main';
import { Plantillas } from '../Portafolio/Plantillas';
import { Navbar } from '../UI/Navbar';


export const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
      <div>
      
        <Switch>
           <Route exact path = "/" render={Main}/>
           <Route exact path = "/about" render={About}/>
           <Route exact path = "/portafolio" render={Plantillas}/>
           <Route exact path = "/login" render={Login}/>
          

           <Redirect to = "/"/>
        </Switch>
      </div>
    </Router>
    )
}
