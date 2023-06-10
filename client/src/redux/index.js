import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./AuthSlice/LoginSlice";
import cartSlice from "./cartSlice/cartSlice";
import selectedProductSlice from "./productSlice/selectedProductSlice";
import setProductSlice from "./productSlice/setProductSlice";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      localStorage.setItem('applicationState', JSON.stringify(getState()));
      return result;
    };
  };
  
  const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
      return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
    }
  };

const store=configureStore({
    reducer:{
        setProduct:setProductSlice.reducer,
        selectedProduct:selectedProductSlice.reducer,
        cart:cartSlice.reducer,
        login:loginSlice.reducer
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
    
});

export default store