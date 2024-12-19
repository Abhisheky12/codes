import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{

        //state=initialState
        //increment,decrement,incrementbyampunt are actions
        increment(state,action){
            state.value+=1;
            console.log(action);
            
        },
        decrement(state,action){
            state.value-=1;
        },
        IncrementByAmount(state,action){
              state.value+=action.payload
              console.log(action);
              
        }
    }
})
export const{increment,decrement,IncrementByAmount}=counterSlice.actions
export default counterSlice.reducer