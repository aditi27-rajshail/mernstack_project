import React,{useState, useEffect} from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Contact = () => {
    const [userData, setUserData] = useState({
        name: "", email:"", phone:"", message:""
    });
    
    const callContact=async () => {
        try{
            const res= await fetch('/getdata',{
                method:"GET",
                headers:{
                   
                    "Content-type":  "application/json"
                },
                
            });
            const data= await res.json();
            console.log(data);
            setUserData({...userData, name: data.name, email: data.email, phone:data.phone});
            if(!data === 200){
                const error = new Error(res.error);
                throw error;
            }

        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        callContact();
    }, []);

    const handelInputs = (e)=>{
        const name =e.target.name;
        const value =e.target.value;
        setUserData({...userData, [name]: value});

    }
    
    const sendContact = async (e)=>{
        e.preventDefault();
        const { name, email, phone, message}=userData;
        const res = await fetch('/contact',{
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });
        const data = await res.json();
        if(!data){
            console.log("Message not Send");
        }else{
            alert("Message Sent");
            setUserData({...userData, message:""});
        }
    }

    return (
        <>
            <div className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            <div className="content_info_content d-flex justify-content-start align-items-center">
                                <PhoneAndroidIcon style={{ width: 50 }} />
                                <div className="contact_info_title">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_title">
                                        +91 8268421807
                                    </div>
                                </div>
                            </div>
                            <div className="content_info_content d-flex justify-content-start align-items-center">
                                <EmailIcon style={{ width: 50 }} />
                                <div className="contact_info_title">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_title">
                                        aditirajan.khot7@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="content_info_content d-flex justify-content-start align-items-center">
                                <LocationOnIcon style={{ width: 50 }} />
                                <div className="contact_info_title">
                                    <div className="contact_info_title">
                                        Location
                                    </div>
                                    <div className="contact_info_title">
                                        Mumbai
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="contact form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in Touch
                                </div>
                                <form method="POST" id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between">
                                        <input type="text" id="contact_form_name" className="contact_form_name input_field" 
                                        name="name" onChange={handelInputs} placeholder="your name"  value={userData.name} required="true" />
                                        <input type="email" id="contact_form_email" className="contact_form_email input_field" 
                                        name="email" onChange={handelInputs} placeholder="your email" value={userData.email}  required="true" />
                                        <input type="number" id="contact_form_number" className="contact_form_number input_field" 
                                        name="phone" onChange={handelInputs} placeholder="your phone" value={userData.phone}  required="true" />
                                    </div>
                                </form>
                                <div className="contact_form_text mt-4 justify-content-center">
                                    <textarea className="text_field contact_form_message" 
                                    name="message" onChange={handelInputs} placeholder="Message" value={userData.message} col="30"></textarea>
                                </div>
                                <div>
                                    <button type="submit" onClick={sendContact} className="btn btn-primary btn-block">Send Message</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>

        </>
            )
}

            export default Contact;
