import { createSlice } from "@reduxjs/toolkit";

// Check local starage
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
const initialTotal = parseFloat(localStorage.getItem("total")) || 0;
const initialCount = parseInt(localStorage.getItem("count")) || 0;

const initialState = {
  cart: initialCart,
  total: initialTotal,
  count: initialCount,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      state.total += product.price;
      state.count++;

      // Set local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", state.total);
      localStorage.setItem("count", state.count);
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cart.findIndex(
        (item) => item.id === productId
      );
      if (productIndex !== -1) {
        const removedProduct = state.cart[productIndex];
        state.total -= removedProduct.price * removedProduct.quantity;
        state.count -= removedProduct.quantity;
        state.cart.splice(productIndex, 1);
      }

      // Set local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", state.total);
      localStorage.setItem("count", state.count);
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((item) => item.id === productId);
      if (product) {
        product.quantity++;
        state.total += product.price;
        state.count++;
      }

      // Set local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", state.total);
      localStorage.setItem("count", state.count);
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
        state.total -= product.price;
        state.count--;
      }

      // Set local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", state.total);
      localStorage.setItem("count", state.count);
    },
  },
});

export const {
  addToCart,
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
