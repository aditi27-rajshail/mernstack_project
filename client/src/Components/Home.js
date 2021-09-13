import React,{useEffect, useState}from 'react'
import h1 from '../images/h1.gif'

const Home = () => {
    const [userData, setUserData] = useState(" ");
    const [show, setShow]=useState(false);
  
    const userHomePage=async () => {
        try{
            const res= await fetch('/getdata',{
                method:"GET",
                headers:{
                   
                    "Content-type":  "application/json"
                },
                
            });
            const data= await res.json();
            
            setUserData(data.name);
            setShow(true);
            if(!data === 200){
                const error = new Error(res.error);
                throw error;
            }

        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <h2>This is a MERN project</h2><span>By Aditi Khot</span>
                    <h2>Welcome</h2>
                    <h3>{userData}</h3>
                    <h3>{show ? 'Happy to see you back': 'Please Login to Join Us'}</h3>
                    <img src={h1} style={{height:400, width:500}} alt="home"/>
                </div>
            </div>
        </>

        
    )
}

export default Home
