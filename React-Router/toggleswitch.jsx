import { useState } from "react";
import "./toggleswitch.css";
export const Toggleswitch=()=>{


    const[isOn,setisOn]=useState(false);
    const handleToggleswitch=()=>{
        setisOn(!isOn);  
    }

    return(
       <div className={`toggle-switch ${isOn?"oncolor":"offcolor"}`} onClick={handleToggleswitch}>
           <div className={`switch  ${isOn ? "on" :"off"}`}>
              <span className="switch-state">{isOn?"On":"Off"}</span>
           </div>
       </div>
    )   
}