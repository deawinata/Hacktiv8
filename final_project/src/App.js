import './App.css';
import {Grid} from "@mui/material";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
	return (
		<div className={'App h-full'}>
			<Header/>
			<Movie/>
		</div>
	);
}

export default App;
