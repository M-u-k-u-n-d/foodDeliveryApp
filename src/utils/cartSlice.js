import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items : [],
    },
    reducers : {

        // Vanilla (older) Redux => DON'T MUTATE STATE
        //  const newState = [...state]
        //  newState.items.push(action.payload)
        // return newState

        // REDUX TOOLKIT
        // we have to mutate the state

        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem : (state, action)=>{
            console.log(typeof state.items)
            state.items.pop();
        },
        clearCart : (state , action ) =>{
            state.items.length = 0;
            // return {items : []};
        },
    }
});
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
