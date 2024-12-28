import { useCallback, useState } from "react";
import { ChildComponent } from "./childcomponentcallback";
export const Parentcomponent=()=>{
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        setCount((prev)=>prev+1);
    },[]);
    console.log("parent");
    return(
        <div>
        <div>
            count:{count}
        </div>
        <div>
            <button onClick={handleClick}>increment</button>
        </div>
        <div>
            <ChildComponent funpass={handleClick}/>
        </div>
        
        </div>
    );
}