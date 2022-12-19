import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './features/cart-slice';
import productSlice from './features/product-slice';
import wishlistSlice from './features/wishlist-slice';
import reducer from './Reducer';
const rootReducer = combineReducers({
  products:productSlice,
  cart:cartSlice,
  wishlist:wishlistSlice,
  user:reducer
})

export default rootReducer;