import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../pages/Login/reducer/authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer
	},
})