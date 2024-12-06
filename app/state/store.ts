import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import calculatorReducer from "./reducer/calculatorReducer";

export const store = () => {
  return configureStore({
    reducer: {
      expressions: reducer,
      calculator: calculatorReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
