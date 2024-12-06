import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorReducer {
  input: string;
}

const initialState: CalculatorReducer = {
  input: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

// Export actions and reducer
export const { setInput } = calculatorSlice.actions;
export default calculatorSlice.reducer;
