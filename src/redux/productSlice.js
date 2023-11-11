import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../Data.js';

const initialState = {
  products: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProducts: (state,{payload}) => {
      state.products =  storeData;
    }
  }
})

export const {fetchProducts} = productSlice.actions

export default productSlice.reducer;
