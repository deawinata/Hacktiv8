import React, {Component} from "react";
import {HashLink} from "react-router-hash-link";

export default class Navbar extends Component {
	render() {
		return (
			// <div className={'App'}>
				<nav style={{backgroundColor: 'pink'}}>
					<img src={require('../assets/images/unnamed.webp')}
					     style={{borderRadius: 99, height: '25vh', marginBottom: 20}}/>
					<HashLink className={'hashlink'} smooth to={'/#about'}>ABOUT</HashLink>
					<HashLink className={'hashlink'} smooth to={'/#experience'}>EXPERIENCE</HashLink>
					<HashLink className={'hashlink'} smooth to={'/#education'}>EDUCATION</HashLink>
					<HashLink className={'hashlink'} smooth to={'/#skills'}>SKILLS</HashLink>
					<HashLink className={'hashlink'} smooth to={'/#interests'}>INTERESTS</HashLink>
					<HashLink className={'hashlink'} smooth to={'/#awards'}>AWARDS</HashLink>
				</nav>
			// </div>
		)
	}
}