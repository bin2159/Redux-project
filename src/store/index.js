import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showState: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    drecrement(state) {
      state.counter--;
    },
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggle(state) {
      state.showState = !state.showState;
    },
  },
});



const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({ reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}});

export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions
export default store;
