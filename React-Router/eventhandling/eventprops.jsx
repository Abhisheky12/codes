export const Eventprops=()=>{
         const handlewelcomeuser=(user)=>{
           alert(`hey, ${user}`);
         };
        const handlehover=()=>{
            alert("hey how are you");
        }

          return(
            <>
            <Welcomeuser onClick={()=>handlewelcomeuser("vinod")}
             onMouseEnter={handlehover} />
            //here its not necessary to give event names we can use other also
            onButtonclick,mouseclick .
            </>
          );
};

const Welcomeuser =(props)=>{
    const handlegreeting=()=>{
        props.onClick();
    }
    return(
        <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={handlegreeting}>Greeting</button>      
        </>
    )
}