import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
	isLoginPending: '',
	isLoginSuccess: '',
	errorMessage: '',
	user: {}
}

function callLoginApi(email, password) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			if (email === 'admin@login.com' && password === 'admin') {
				resolve({email})
			} else {
				reject('Invalid email and password')
			}
		}, 1000)
	})
}

export const loginApi = createAsyncThunk('auth/login', async ({email, password}) => {
	try {
		const response = await callLoginApi(email, password)
		return response.email
	} catch (e) {
		throw(e)
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(loginApi.pending, (state) => {
				state.isLoginPending = true
				state.errorMessage = ''
			})
			.addCase(loginApi.fulfilled, (state, action) => {
				const {email} = action.payload
				state.isLoginPending = false
				state.isLoginSuccess = true
				state.errorMessage = ''
				state.user = {email}
			})
			.addCase(loginApi.rejected, (state, action) => {
				state.isLoginPending = false
				state.isLoginSuccess = false
				state.errorMessage = action.error.message
			})
	}
})

export default authSlice.reducer