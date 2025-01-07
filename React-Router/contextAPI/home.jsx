import { useContext ,use } from "react";
import { Biocontext} from ".";
// import{useBioContext} from ".";


export const Home=()=>{
    const {myName} =useContext(Biocontext);
    // const {myName,age} =useBioContext();
    // const {myName}=use(Biocontext); not valid abhi tak ageaa  asaka hai


    return (
        <h1>hello context Api.My name is {myName}</h1>
    );
}



//custom hook
const useBioContext=()=>{
    const Context=useContext(Biocontext);
    return Context;
}