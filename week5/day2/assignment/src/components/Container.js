import React from 'react'
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Interests from "../pages/Interests";
import Awards from "../pages/Awards";

export default function Container() {
	return (
		<div className={'wrap'}>
			<div className={'fixed'}>
				<section id={'about'}>
					<About/>
				</section>
				<section id={'experience'}>
					<Experience/>
				</section>
				<section id={'education'}>
					<Education/>
				</section>
				<section id={'skills'}>
					<Skills/>
				</section>
				<section id={'interests'}>
					<Interests/>
				</section>
				<section id={'awards'}>
					<Awards/>
				</section>
			</div>
		</div>
	)
}