import { configureStore } from '@reduxjs/toolkit'

import movieReducer from './components/reducer/movieSlice'

export default configureStore({
	reducer: {
		movie: movieReducer
	}
})
