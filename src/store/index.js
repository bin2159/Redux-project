import { createSlice, configureStore } from "@reduxjs/toolkit";

const intialCounterState = { counter: 0, showState: true };

const counterSlice = createSlice({
  name: "counter",
  intialState: intialCounterState,
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
      state.counter = state.count + action.payload;
    },

    toggle(state) {
      state.showState = !state.showState;
    },
  },
});



const intialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  intialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({ reducer:counterSlice.reducer});

export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions
export default store;
