import React, { useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import login from '../images/login.jpg';
import { NavLink } from 'react-router-dom';
import {UserContext} from '../App'
const Login = () => {
     const {state, dispatch} = useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const loginUser = async (e) => {
        e.preventDefault();
        const res = fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        });
        const data = (await res).json;
        if ((await res).status === 400 || !data) {
            window.alert("Invalid Credentiales");
            console.log("Invalid Credentiales");
        }
        else {
            dispatch({type:"USER", payload:true})
            window.alert(" Login Sucessfull");
            console.log(" login Sucessfull");
            history.push("./");

        }
    }

    return (
        <>

            <div className="container">
                <div className="center">
                    <div className="main_div">
                        <div className="form_div">
                            <form>
                                <h3>Login </h3>

                                <div className="form-group">
                                    <label> <i className="zmdi zmdi-email" /> Email address</label>
                                    <input type="email" className="form-control" autoComplete="off"
                                        value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label><i className="zmdi zmdi-lock" /> Password</label>
                                    <input type="password" className="form-control" autoComplete="off"
                                        value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="Enter password" />
                                </div>

                                <button type="submit" name="signin" id="signin"
                                    onClick={loginUser} value="register" className="btn btn-primary btn-block">Login</button>
                            </form>

                        </div>
                        <div className="img-div" >
                            <figure>
                                <img src={login} style={{ height: 400, width: 350 }} alt="siginimage" />
                            </figure>
                            <NavLink to='/signup'>Not yet Registered? Create a account</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
