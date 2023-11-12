import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart: ( state, { payload }) => {
      const newItem = payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id) 

      if(existingItem) {
        return {
          cartItems: state.cartItems.map((item) => item.id === existingItem.id ? {...item, amount: item.amount + 1} : item)
        }
      }
      
      return { cartItems: [...state.cartItems, newItem]}
    },
    
    increamentCart: (state,{payload}) => {
      const item = state.cartItems.find(item => item.id === payload.id)
      item.amount++;
    },

    decreamentCart: (state,{payload}) => {
      const item = state.cartItems.find(item => item.id === payload.id)
      item.amount--;
    },

    removeItem: (state, {payload}) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload.id)
    },

    updateTotal: (state) => {
      let total = 0; let amount = 0;
      state.cartItems.forEach(item => {
        amount += item.amount
        total += item.amount * item.price
      })

      state.amount = amount;
      state.total = total
    }
  }
})

export const {addToCart, increamentCart, decreamentCart, removeItem, updateTotal} = cartSlice.actions

export default cartSlice.reducer