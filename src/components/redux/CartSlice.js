import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCarttotal: (state) => {
      let { cartTotalAmount, cartTotalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.cartTotalAmount += itemTotal;
          cartTotal.cartTotalQuantity += quantity;
          return cartTotal;
        },
        { cartTotalAmount: 0, cartTotalQuantity: 0 }
      );
      state.cartTotalAmount = parseInt(cartTotalAmount.toFixed(2));
      state.cartTotalQuantity = cartTotalQuantity;
    },

    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++;
        state.cartTotalQuantity++;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
        state.cartTotalQuantity++;
      }
    },
  },
});

export const {
  getCarttotal,
  increase,
  decrease,
  remove,
  clearCart,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
