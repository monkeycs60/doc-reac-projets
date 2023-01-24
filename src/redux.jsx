import { configureStore, createSlice } from "@reduxjs/toolkit";

const signatureSlice = createSlice({
  name: "signature",
  initialState: {
    signature: "",
  },
  reducers: {
    updateSignature(state, action) {
      state.signature = action.payload;
    },
  },
});

export const { updateSignature } = signatureSlice.actions;

const store = configureStore({
  reducer: {
    signature: signatureSlice.reducer,
  },
});

export default store;
