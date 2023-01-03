import {
	Grid,
	Typography,
	CircularProgress,
	Paper,
	Dialog,
	Button,
	createTheme,
	ThemeProvider,
	CardActionArea
} from "@mui/material";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getMovieByIDApi, searchMovieTitleApi} from "./reducer/movieSlice";

const theme = createTheme({
	palette: {
		primary: {
			main: '#F5B7B1'
		}
	}
});


export default function Movie() {
	const {movieList, isSearchSuccess, movieDetail} = useSelector((state) => state.movie)
	const dispatch = useDispatch()
	
	const [isOpen, setIsOpen] = useState(false)
	
	useEffect(() => {
		dispatch(searchMovieTitleApi({title: 'batman'}))
	}, [dispatch])
	
	const onClickMovie = async (id) => {
		await dispatch(getMovieByIDApi({id}))
		setIsOpen(true)
	}
	
	return (
		<ThemeProvider theme={theme}>
			<Grid container className={'flex flex-col items-center justify-center h-full p-10'}>
				<Dialog open={isOpen} maxWidth={'md'}>
					<div className={'flex flex-col place-items-center p-5'}>
						<Typography sx={{fontWeight: 'bold', fontSize: 20}}>{movieDetail.Title}</Typography>
						<img className={'poster my-3'} src={movieDetail.Poster} alt={movieDetail.Title}/>
						<Typography><b>IMDB Rating</b>: {movieDetail.imdbRating}</Typography>
						<Grid container className={'my-3 w-full'}>
							<Grid item xs={6} className={'mr-2'}>
								<Typography><b>Released</b> : {movieDetail.Released}</Typography>
								<Typography><b>Runtime</b> : {movieDetail.Runtime} </Typography>
								<Typography><b>Genre</b> : {movieDetail.Genre} </Typography>
								<Typography><b>Type</b> : {movieDetail.Type} </Typography>
								<Typography><b>Country</b> : {movieDetail.Country} </Typography>
								<Typography><b>Language</b> : {movieDetail.Language} </Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography><b>Director</b> : {movieDetail.Director}</Typography>
								<Typography><b>Writer</b> : {movieDetail.Writer} </Typography>
								<Typography><b>Actors</b> : {movieDetail.Actors} </Typography>
							</Grid>
						</Grid>
						<div className={'my-3'}>
							<Typography align={'justify'}>{movieDetail.Plot}</Typography>
						</div>
						<Button variant={'contained'} style={{color: 'white'}}
						        onClick={() => setIsOpen(false)}>Close</Button>
					</div>
				</Dialog>
				{isSearchSuccess ?
					movieList ? movieList.map((item, i) => {
							return (
								<Paper elevation={3} key={item.Title + i} className={'m-2'}
								       sx={{
									       "&:hover": {
										       boxShadow: 8,
									       },
								       }}
								       onClick={() => onClickMovie(item.imdbID)}
								>
									<CardActionArea>
										<div className={'flex flex-col place-items-center'}
										     style={{height: '350px', width: '300px'}}>
											<div>
												<img className={'image'} src={item.Poster} alt={movieDetail.Title}/>
											</div>
											<div
												className={'flex flex-col flex-1 flex-wrap justify-center w-full text-white'}
												style={{backgroundColor: '#7FB3D5'}}>
												<Typography align={'center'} flexWrap fontSize={14} fontWeight={'bold'}>{item.Title}</Typography>
											</div>
										</div>
									</CardActionArea>
								</Paper>
							)
						}) :
						<Typography>Please search the movie</Typography>
					
					:
					<CircularProgress/>
				}
			</Grid>
		</ThemeProvider>
	)
}
