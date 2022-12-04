import React from "react";

export default function Skills() {
	return (
		<div className={'container'}>
			<div className={'title'} style={{marginBottom: 40}}>SKILLS</div>
			<div className={'subtitle'} style={{color: 'lightgrey'}}>PROGRAMMING LANGUAGE & TOOLS</div>
			<div className={'rowdiv'}>
				<div style={{display: 'flex', flex: 1}}>
					<ul style={{fontSize: 20}}>
						<li>HTML5</li>
						<li>JavaScript</li>
						<li>NodeJS</li>
						<li>Django</li>
					</ul>
				</div>
				<div style={{display: 'flex', flex: 1}}>
					<ul style={{fontSize: 20}}>
						<li>CSS3</li>
						<li>ReactJS</li>
						<li>Python</li>
						<li>Ember</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
