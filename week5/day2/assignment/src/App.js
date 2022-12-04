import React, {Component} from "react";
import css from './App.css'
import Navbar from "./components/Navbar";
import Container from "./components/Container";

export default class App extends Component {
	render() {
		return (<div className={'App'}>
			<Navbar/>
			<Container/>
		</div>)
	}
}