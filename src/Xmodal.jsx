import React, { useState } from "react";
import UserForm from "./UserForm";

export default function Xmodal(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <h1>User Details Modal</h1>
            <button onClick={()=>setIsOpen(true)}>Open Form</button>
            {isOpen && <UserForm setIsOpen={setIsOpen}/>}
        </div>
    )
}