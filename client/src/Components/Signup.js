import React,{ useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import siginin from '../images/signin.png';

const Signup = () => {
    const history= useHistory();
   const [user,setUser] = useState({
       name:"", email:"", phone:"", work:"", password:"", cpassword:""
   });
   let name,value;
   const handleInputs=(e)=>{
     console.log(e);
     name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value});
   }
   const PostData= async (e)=>{
     e.preventDefault();
     const {name, email, phone, work, password, cpassword} =user;
     const res=fetch('/register',{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body: JSON.stringify({
            name, email, phone, work, password, cpassword
         })
     });
     const data = (await res).json;
     
     if((await res).status === 422 || !data){
         window.alert("Invalid Registration ");
         console.log("Invalid Registration");
     }
     else
     {
        window.alert(" Registration Sucessfull");
        console.log(" Registration Sucessfull");
        history.push("./login");

     }

   }

    return (
        <>
            <div class="container">
                <div class="center">
                    <div className="main_div">
                        <div className="form_div">
                            <form method="POST">
                                <h3>Sign Up</h3>

                                <div className="form-group">
                                    <label><i className="zmdi zmdi-account" /> First name</label>
                                    <input type="text" className="form-control" autoComplete="off"
                                    value={user.name} onChange={handleInputs} name="name" id="name" placeholder="Your name" />
                                </div>

                                <div className="form-group">
                                    <label> <i className="zmdi zmdi-email" /> Email address</label>
                                    <input type="email" className="form-control" autoComplete="off"
                                    value={user.email} onChange={handleInputs} name="email" id="email" placeholder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label> <i className="zmdi zmdi-phone-in-talk" /> Phone Number</label>
                                    <input type="number" className="form-control" autoComplete="off"
                                    value={user.phone} onChange={handleInputs} name="phone" id="phone" placeholder="Your Number" />
                                </div>

                                <div className="form-group">
                                    <label><i className="zmdi zmdi-slideshow" /> Work</label>
                                    <input type="text" className="form-control" autoComplete="off"
                                    value={user.work} onChange={handleInputs} name="work" id="work" placeholder="Your Profession" />
                                </div>

                                <div className="form-group">
                                    <label><i className="zmdi zmdi-lock" /> Password</label>
                                    <input type="password" className="form-control" autoComplete="off"
                                    value={user.password} onChange={handleInputs} name="password" id="password" placeholder="Enter password" />
                                </div>

                                <div className="form-group">
                                    <label><i className="zmdi zmdi-lock" /> Confirm Password</label>
                                    <input type="password" className="form-control" autoComplete="off"
                                    value={user.cpassword} onChange={handleInputs} name="cpassword" id="cpassword" placeholder="Enter password" />
                                </div>
                                <button type="submit" onClick={PostData} name="signup" id="signup" value="register" className="btn btn-primary btn-block">Sign Up</button>
                            </form>

                        </div>
                        <div className="img-div" >
                            <figure>
                                <img src={siginin} alt="siginimage" />
                            </figure>
                            <NavLink to='/login'>Already Registered? Sign In</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
