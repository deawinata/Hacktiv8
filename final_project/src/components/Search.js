import React, {useState} from "react";
import {Grid, TextField, Button, createTheme, ThemeProvider} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import {searchMovieTitleApi} from "./reducer/movieSlice";

const theme = createTheme({
	palette: {
		primary: {
			main: '#F5B7B1'
		},
		secondary: {
			main: '#D7BDE2'
		}
	}
});

export default function Search() {
	const [title, setTitle] = useState('')
	const dispatch = useDispatch()
	
	const onSearch = () => {
		dispatch(searchMovieTitleApi({title}))
	}
	
	return (
		<ThemeProvider theme={theme}>
			<Grid container className={'flex flex-row items-center'}>
				<Grid item xs={9}>
					<TextField size={'small'} className={'w-full bg-white'}
					           onChange={(evt) => setTitle(evt.target.value)} autoComplete={'off'}/>
				</Grid>
				<Grid item xs={3} className={'pl-3'}>
					<Button variant={'contained'} style={{color: 'white', width: '100%'}}
					        onClick={onSearch}>Search</Button>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}
