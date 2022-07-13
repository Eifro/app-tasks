import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";

// configureStore .- divide el estado en múltiples archivos y los agrupa en uno
// devuelve un objeto
export const store = configureStore({
    reducer : {
        tasks: tasksReducer,
    }
})