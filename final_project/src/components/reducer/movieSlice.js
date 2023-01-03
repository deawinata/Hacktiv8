import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	isSearchPending: false,
	isSearchSuccess: false,
	errorMessage: '',
	movieList: [],
	movieDetail: {}
}

export const searchMovieTitleApi = createAsyncThunk('movie/searchByTitle', async ({title}) => {
	try {
		const url = `https://omdbapi.com/?s=${title}&apikey=c06f4e01`
		const response = await axios.get(url)
		return response.data
	} catch (e) {
		throw (e)
	}
})

export const getMovieByIDApi = createAsyncThunk('movie/searchByID', async({id}) => {
	try {
		const url = `https://omdbapi.com/?i=${id}&apikey=c06f4e01`
		const response = await axios.get(url)
		return response.data
	} catch (e) {
		throw (e)
	}
})

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(searchMovieTitleApi.pending, (state) => {
				state.isSearchPending = true
				state.errorMessage = ''
			})
			.addCase(searchMovieTitleApi.fulfilled, (state, action) => {
				const {Search} = action.payload
				state.movieList = Search
				state.isSearchPending = false
				state.isSearchSuccess = true
			})
			.addCase(searchMovieTitleApi.rejected, (state, action) => {
				state.isSearchPending = false
				state.isSearchSuccess = false
				state.errorMessage = action.error.message
			})
			.addCase(getMovieByIDApi.fulfilled, (state, action) => {
				state.movieDetail = action.payload
			})
	}
})

export default movieSlice.reducer
