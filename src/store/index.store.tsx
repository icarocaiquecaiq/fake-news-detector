import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/login/store/counter.store";

console.log("Creating Redux store"); // <- add this to detect re-creation

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
