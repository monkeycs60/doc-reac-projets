import { configureStore, createSlice } from "@reduxjs/toolkit";

const signatureSlice = createSlice({
  name: "signature",
  initialState: {
    signature: null,
  },
  reducers: {
    setSignature(state, action) {
      state.signature = action.payload;
    },
    resetSignature(state) {
      state.signature = null;
    },
  },
});

export const { setSignature, resetSignature } = signatureSlice.actions;

const store = configureStore({
    reducer: {
        signature: signatureSlice.reducer,
    },

});

export default store;
