import React, { useState } from "react";
import "./userform.css";

export default function UserForm({setIsOpen}){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState("");

  const handleEmail =(e)=>{
    let username = e.target.value;
    setEmail(username);
  }

  const handlePhone=(e)=>{
    let userPhone = e.target.value;
    setPhone(userPhone)
  }

  const handleDob =(e)=>{
    let value = e.target.value;
    setDob(value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

        if(phone.length!==10 || isNaN(phone)){
        alert(`Invalid phone number`);
        return;
       }
       
       if(!email.includes("@")){
        alert(`Invalid email`);
        return;
       }
       
       const today = new Date();
       const selectDate = new Date(dob)
       if(selectDate > today){
        alert("Invalid date of birth");
        return;
       }

    setDob("");
    setEmail("");
    setName("");
    setPhone("");   

    alert("Form submitted successfully");
    setIsOpen(false);
  }
  const CloseSubmit=()=>{
        setIsOpen(false);
    }

    return(
        <div className="modal" onClick={CloseSubmit}>
            <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Fill Details</h3>
                    <div>
                        <label htmlFor="">Username:</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="username" required/>
                    </div>
                    <div>
                        <label htmlFor="">Email Address:</label>
                        <input type="text" value={email}  onChange={(e)=>handleEmail(e)} id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="">Phone Number:</label>
                        <input type="text" value={phone} onChange={(e)=>handlePhone(e)} id="phone" required/>
                    </div>
                    <div>
                        <label htmlFor="">Date of Birth:</label>
                        <input type="date" value={dob} onChange={(e)=>handleDob(e)} id="dob" required/>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
        
        
    )
}