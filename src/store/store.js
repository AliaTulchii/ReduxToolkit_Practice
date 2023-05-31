import { configureStore } from "@reduxjs/toolkit";
import userSlice from "feature/user/userSlice";
import todoSlice from "feature/todo/todoSlice";
import { postSlice } from "feature/post/postSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        post: postSlice,
    },
})