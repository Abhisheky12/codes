import { useState } from "react";
import "./Hooks.css";
// import { useState } from "react";

// const ShortCircuitExample = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [user, setUser] = useState("");
//   // const [count, setCount] = useState(0);

//   // if (user) {
//   //   const [count, setCount] = useState(0);
//   //   // setCount(count + 1);
//   // }
//   ``;
//   // const getData = () => {
//   //   const [data, setData] = useReducer(0);
//   // }; 

//   // getData();

//   return (
//     <section className="container short-container">
//       <h1>Welcome to the ShortCircuit Evaluation!</h1>

//       {/* Conditional rendering using short circuit evaluation */}
//       {isLoggedIn && <p>You are logged in!</p>}

//       {/* Another example of short circuit evaluation */}
//       {user ? `Hello ${user}` : "Plz log in!"}

//       <div className="grid-three-cols">
//         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//           Toggle Login State
//         </button>
//         <button onClick={() => setUser("vinod thapa")}>Set User</button>
//         <button onClick={() => setUser("")}>Clear User</button>
//       </div>
//     </section>
//   );
// };
const ShortCircuitExample=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(true);
    // const variable=isLoggedIn?<p>You are logged in!</p>:<p>not logged</p>;
    const[user,setUser]=useState("");
    return(
        <section className="container short-containar">
            <h1>Welcome to the Shortircuit Evaljuation!</h1>

           { isLoggedIn && <p>You are logged in!</p>}
           {/* { variable} */}
           {user ?`hello ${user}`:"Please log in"}
            

            <div className="grid-three-cols">
                 <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                 <button onClick={()=>setUser("vinod thapa")}>Set User</button>
                 <button onClick={()=>setUser("")}>Clear User</button>
            </div>
        </section>
    );
}
export default ShortCircuitExample;