import React from "react";
import {Grid, Typography} from "@mui/material";
import Search from "./Search";

export default function Header() {
	return (
		<Grid container className={'flex flex-row items-center px-10'} sx={{backgroundColor: '#7FB3D5', height: 60}}>
			<Grid item xs={8} className={'flex'}>
				<Typography style={{
					fontSize: 25,
					color: 'white',
					fontWeight: 'bold'
				}}>MovieDB</Typography>
			</Grid>
			<Grid item xs={4} className={'flex flex-row justify-end items-center text-white'}>
				<Search/>
			</Grid>
		</Grid>
	)
}
