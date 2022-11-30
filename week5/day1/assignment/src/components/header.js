import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faSearch} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Div = styled.div`
  &:hover {
    background-color: white;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: black;
  }
`

function Header() {
	return (
		<div className={'text-white flex flex-row flex-1 items-center justify-center'}
		     style={{backgroundColor: '#11074e', height: 65}}>
			<div className={'mx-1'}>
				<img src={require('../assets/images/logo.png')}
				     style={{height: 35, width: 63}}
				     alt={'logo'}/>
			</div>
			<Div className={'mx-1 px-3 text-xs font-semibold'}>ABOUT US</Div>
			<Div className={'mx-1 px-3 text-xs font-semibold'}>CORPORATE GOVERNANCE</Div>
			<Div className={'mx-1 px-3 text-xs font-semibold'}>SUBSIDIARIES & AFFILIATES</Div>
			<Div className={'mx-1 px-3 text-xs font-semibold'}>INVESTOR RELATIONS</Div>
			<Div className={'mx-1 px-3 text-xs font-semibold'}>SOCIAL AND EVENTS</Div>
			<Div className={'mx-1 px-3 text-xs font-semibold'}>E-COMMERCE</Div>
			<Div className={'mx-1 px-3 text-xs font-semibold'}><FontAwesomeIcon icon={faGlobe}/> EN</Div>
			<div className={'mx-1 px-3 text-xs flex items-start'}>
				<button>
					<FontAwesomeIcon icon={faSearch}/>
				</button>
			</div>
		</div>
	)
}

export default Header