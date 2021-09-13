import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/log1.jpg';
import {UserContext} from '../App'

const NavBar = () => {
    const {state, dispatch} = useContext(UserContext);
    const RenderMenue = () => {
        if (state)
        {
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink to="/logout" className="nav-link">Logout</NavLink>
                </li>

            </>
        )
        }
        else{
            return(
                <>
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Sign In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Register</NavLink>
                </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink to="/">
                        <img src={logo} style={{ height: 40, width: 50 }} alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <RenderMenue/>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
