import React,{ useEffect, useState} from 'react'
import aditi from '../images/aditi.png'
import { useHistory } from 'react-router'
const About = () => {
    const [userData, setUserData] = useState(0);
    const history = useHistory();
    const callAboutPage =async () => {
        try{
            const res= await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-type":  "application/json"
                },
                credentials:"include"
            });
            const data= await res.json();
            console.log(data);
            setUserData(data);
            if(!data === 200){
                const error = new Error(res.error);
                throw error;
            }

        } catch(err){
            console.log(err);
            history.push('/login');

        }
    }

    useEffect(() => {
        callAboutPage();
    }, []);


    return (
        <>
            <div class="container">
                <div class="center">
                    <div clasName="container emp-profile">
                        <form method="GET">
                            <div className="row">
                                <div className="col-md-4 mt-4">
                                    <img src={aditi} style={{ height: 200, width: 200 }} alt="profile" />
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="profile_head">
                                        <h5>{userData.name}</h5>
                                        <h6>{userData.work}</h6>
                                        <p className=" profile-rating mt-3 mb-5">RANKING: <span>1/10</span></p>
                                        <ul className="nav nav-pills" role="tablist">
                                            <li className="nav-link " >
                                                <a clasName="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a></li>
                                            <li className="nav-link" >
                                                <a clasName="nav-link active" id="profile-tab" data-toggle="tab" href="#tab" role="tab">Profile</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2 mt-4">
                                    <button classNamme="btn btn-primary">Edit Profile</button>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="profile-work">
                                            <p>WORK LINK</p>
                                            <a href="https://github.com/aditi27-rajshail" target="_blank">Github</a><br />
                                        </div>
                                    </div>
                                    <div className="col-md-8 pl-5 about-info">
                                        <div className="tab-content profile-tab">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" >
                                                <div clasName="row">
                                                    <div className="col-md-6">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{userData._id}</p>
                                                    </div>
                                                </div>
                                                <div clasName="row">
                                                    <div className="col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{userData.name}</p>
                                                    </div>
                                                </div>
                                                <div clasName="row">
                                                    <div className="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{userData.email}</p>
                                                    </div>
                                                </div>
                                                <div clasName="row">
                                                    <div className="col-md-6">
                                                        <label>Number</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{userData.phone}</p>
                                                    </div>
                                                </div>
                                                <div clasName="row">
                                                    <div className="col-md-6">
                                                        <label>Work</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>{userData.work}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
