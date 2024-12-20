// import { useReducer } from "react";



// export const ReducerComp=()=>{
//     const reducer=(state,action)=>{
//         // console.log(state,action);
//         if(action.type==="INCREMENT"){
//             return state+1;
//         }
        
//         if(action.type==="DECREMENT"){
//             return state-1;
//         }
//         if(action.type==="Rest"){
//             // return 0;
//             return(state=0);
//         }
//     }
    
//     // const[count,setCount]=useState(0);
//     // dispatch work as setCount 
//     const[count,dispatch]=useReducer(reducer,0);
//     return(
//        <>
//           <div className="p-4 h-lvh flex flex-col justify-center items-center">
//             <h1>{count}</h1>
//             <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
//             <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
//             <button onClick={()=>dispatch({type:"Rest"})}>Rest</button>
//           </div>
       
//        </>
//     );
// }


// if state have multiple data
import { useReducer } from "react";

export const ReducerComp = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    console.log(state, action);
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //   return (state = 0);
    // }

    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,//...state>means baki sab ka data change na ho count ke alava
          count: state.count + 1,
        };

      case "DECREMENT":
        return { ...state, count: state.count - 1 };

      case "RESET":
        return { ...state, count: 0 };
          
      default:
        return state;
    }
  };

  //   const [count, setCount] = useState(0);
  const [manystate, dispatch] = useReducer(reducer, initialState);
  return (
    <div className=" p-4 h-lvh flex flex-col justify-center items-center ">
      <h1>{manystate.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};