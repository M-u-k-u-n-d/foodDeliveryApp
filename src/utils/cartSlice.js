import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        let indexToRemove = -1;
        for(let i=0; i<state.items.length; i++){
            if(current(state.items[i]) == action.payload){
                indexToRemove = i;
                break;
            }
        }
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      // return {items : []};
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
