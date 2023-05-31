import { configureStore } from "@reduxjs/toolkit";
import userSlice from "feature/user/userSlice";
import todoSlice from "feature/todo/todoSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
    },
})