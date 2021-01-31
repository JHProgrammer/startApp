import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
import logo from '../Assets/Images/Text.png';
export const Navbar = () => {
    return (

    <div className="div_navigation">
    <Link
            className="navbar-brand link_logo" 
            
            to="/menu"
            >


            <img className='logo' src={logo} alt="logo"/>
            </Link>
        <nav className="navbar navbar-expand-sm nav_navigation">
            
            
            <Link 
                className="navbar-brand" 
                to="/menu"
            >
                <div className="menu">
                <p>
                <span>Menu Principal</span>
                    <span>
                      <i className="fas fa-home" aria-hidden="true"></i>    
                </span>
                </p>
                </div>
               
            </Link>

            

            

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/portafolio"
                    >
                       <div className="menu">
                         <p>
                           <span>Portafolio</span>
                           <span>
                              <i className="fas fa-tasks" aria-hidden="true"></i>    
                           </span>
                         </p>
                       </div>
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/about"
                    >
                        <div className="menu">
                         <p>
                            <span>Acerca de nosotros</span>
                            <span>
                               <i className="fas fa-address-card" aria-hidden="true"></i>    
                            </span>
                         </p>
                        </div>
                    </NavLink>

                </div>
            </div>

            <div >
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        <div className="menu">
                         <p>
                            <span>Login</span>
                            <span>
                               <i className="fas fa-times-circle" aria-hidden="true"></i>    
                            </span>
                         </p>
                        </div>
                    </NavLink>
                </ul>
            </div>
        
        </nav>
        </div>
    )
}