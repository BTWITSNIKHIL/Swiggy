import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
name:"cart",
initialState :{
    item:[]

},
reducers:{
    AddItem:(state,action)=>{
state.item.push(action.payload);
    },
    RemoveItem:(state,action)=>
    {
        state.item.pop();
    },
    ClearItem:(state,action)=>
    {
        return { item: []};
    }

}

})

export const {AddItem,RemoveItem,ClearItem} = CartSlice.actions;
export default CartSlice.reducer;