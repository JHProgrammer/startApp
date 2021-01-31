import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {Login} from './Login'

export const Main = () => {
    return (
        <Router>
            <nav>
                <NavLink
                    to='/'
                    exact
                >
                Home
                </NavLink>
                <NavLink
                    to='/ejemplo'
                    exact
                >
                Ejemplo
                </NavLink>
            </nav>
            <Route path="/ejemplo" exact render={Login} />
        </Router>
        
    )
}
