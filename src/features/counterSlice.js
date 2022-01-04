import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducer:{
    login:(state,action)=>{
      state=action.payload
    }
  }
})
export const { login} = counterSlice.actions;


export const selectCount = (state) => state.counter.value;




export default counterSlice.reducer;
