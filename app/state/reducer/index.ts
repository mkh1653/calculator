import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Expression {
  id: string;
  value: string;
}

interface ExpressionReducer {
  data: Expression[];
}

const initialState: ExpressionReducer = {
  data: [],
};

const expressionSlice = createSlice({
  name: "expressions",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (
        state.data.find(
          (expression: Expression) => expression.value === action.payload
        )
      ) {
        return;
      }
      const newExpression = { id: uuidv4(), value: action.payload };
      state.data = [...state.data, newExpression];
    },
    remove: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (expression) => expression.id !== action.payload
      );
    },
  },
});

// Export actions and reducer
export const { add, remove } = expressionSlice.actions;
export default expressionSlice.reducer;

// UUID generator function
function uuidv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
