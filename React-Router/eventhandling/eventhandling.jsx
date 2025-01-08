

export const Eventhandling =()=>{

    function handleButtonClick(){
        alert(" click button");
    }
    
    
    return(
      
        <button onClick={handleButtonClick} style={{backgroundColor:"skyblue",border:"2px solid black",margin:"10px"}}>click me </button>
       
    );
    
    
    }; 