import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

const store = configureStore({
    reducer: {
    cart : cartReducer,
    },
});

console.log("onCreate store : ", store.getState());

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

const action1 = addToCart({id: 1, qty: 20});
store.dispatch(action1);

const action2 = addToCart({id: 2, qty: 10});
store.dispatch(action2);