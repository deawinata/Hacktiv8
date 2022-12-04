import React from "react";
import {GitHub, LinkedIn} from "@mui/icons-material";

export default function About() {
	return (
		<div className={'container'}>
			<div className={'rowdiv'}>
				<div className={'title'}>LOREM</div>
				<div className={'title'} style={{color: 'salmon'}}>IPSUM</div>
			</div>
			<div className={'rowdiv'} style={{marginBottom: 20}}>
				<div className={'subtitle'} style={{color: 'lightgrey'}}>+6281234567890&nbsp;</div>
				<div className={'subtitle'} style={{color: 'salmon'}}>loremipsum@gmail.com</div>
			</div>
			<p style={{marginBottom: 40}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex dapibus, tincidunt mi vitae,
				scelerisque orci. Maecenas diam lacus, sollicitudin ac bibendum in, hendrerit vel felis. Morbi vitae
				tincidunt neque. Donec erat lectus, elementum ut libero nec, lobortis bibendum enim. Sed dapibus vel
				neque sit amet pellentesque. Nulla rhoncus ex sed ante finibus feugiat. Morbi efficitur dui a tortor
				mattis, non lacinia nisl placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
				posuere cubilia curae; Nullam nunc ipsum, scelerisque nec elementum et, faucibus sit amet magna. Duis
				lacus magna, consequat sit amet lorem eget, vehicula varius ante. In auctor rutrum tortor, quis lacinia
				mauris ultrices at. Morbi tempus aliquet feugiat.
				
				Curabitur molestie erat ut sem placerat, ac rhoncus arcu viverra. Integer sit amet nulla commodo justo
				vehicula venenatis. Ut sit amet elit mattis tortor consectetur rutrum. Nullam nec lacus libero. Vivamus
				eget pretium nisi. Donec ultricies magna accumsan accumsan suscipit. Donec venenatis tincidunt velit ac
				faucibus.</p>
			<div className={'rowdiv'}>
				<LinkedIn fontSize={'large'} style={{marginRight: 10}}/>
				<GitHub fontSize={'large'}/>
			</div>
		</div>
	)
}