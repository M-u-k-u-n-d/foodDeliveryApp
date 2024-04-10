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
        const ind = action.payload;
        console.log(ind);
        const filRes = state.items.filter((it,index)=>ind!==index);
        // console.log(filRes);
        return {items : filRes }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      // return {items : []};
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
