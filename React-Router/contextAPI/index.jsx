import { createContext } from "react";
// import { Home } from "../contextAPI/home";
//    1st step
  export const Biocontext=createContext();
   // 2nd step
  export const Bioprovider=({children})=>{
    const myName="vinod";
    const age=1;

    return(
        <Biocontext.Provider value ={{myName,age}}>
          {children}
        </Biocontext.Provider>
    );
   }