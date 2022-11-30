import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faGlobe,
	faArrowDown, faStar, faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";

const Div = styled.div`
  &:hover {
    background-color: white;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: black;
  }
`

const SmallDiv = styled.div`
  background-color: #11074e;
  border-radius: 10px;
  color: white;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

function App() {
	return (
		<div>
			{/*header*/}
			<div className={'text-white flex flex-row flex-1 items-center justify-center'}
			     style={{backgroundColor: '#11074e', height: 65}}>
				<div className={'mx-1'}>
					<img src={require('./assets/images/logo.png')}
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
			
			<div className={'bg-home'}>
				<div
					className={'flex flex-row flex-1 items-center justify-between text-white backdrop-brightness-50 px-40'}
					style={{height: '91vh'}}>
					<div className={'w-3/5'}>
						<p className={'text-2xl font-semibold mb-10'}>OUR STORY</p>
						<p className={'text-5xl font-semibold mb-5'}>On track to be the largest lifestyle smart
							retailer</p>
						<p className={'mb-5'}>We are agressively growing our products and services portfolio to lead the
							lifestyle products
							evolution</p>
						<Button variant={'outlined'} style={{
							color: 'white',
							borderColor: 'white',
							fontSize: 9,
							borderRadius: 10,
							paddingLeft: 35,
							paddingRight: 35,
							borderWidth: 2
						}}>Explore</Button>
					</div>
					<div style={{backgroundColor: 'rgba(0,0,0,0.4)', width: 303}}>
						<div className={'flex flex-col items-center p-5'}>
							<p className={'text-xl mb-5'}>ERAJAYA STOCK PRICE</p>
							<div className={'flex flex-row'}>
								<p className={'text-xl mr-2 mt-1'}>Rp</p>
								<p className={'text-5xl font-semibold'}>406</p>
							</div>
							<div className={'flex flex-row mt-5'}>
								<FontAwesomeIcon icon={faArrowDown} color={'red'} fontSize={'25'}/>
								<p className={'ml-3'} style={{color: 'red'}}><b>-6.00</b> (-1.46%)</p>
							</div>
							<div className={'border-2 border-white border-opacity-40 mt-5 w-full'}
							     style={{fontSize: 12, width: 262}}>
								<div className={'flex flex-row justify-between p-2'}>
									<p>Volume</p>
									<p className={'font-semibold'}>11,977,700</p>
								</div>
								<hr className={'opacity-70 mx-1'}/>
								<div className={'flex flex-row justify-between p-2'}>
									<p>Daily Range</p>
									<p className={'font-semibold'}>406 - 414</p>
								</div>
								<hr className={'opacity-70 mx-1'}/>
								<div className={'flex flex-row justify-between p-2'}>
									<p>52 Wk Range</p>
									<p className={'font-semibold'}>392 - 635</p>
								</div>
							</div>
							<div className={'flex w-full justify-end mt-2'}>
								<p style={{fontSize: 11}}>As at 30 Nov 2022 10.40 AM</p>
							</div>
						</div>
						<hr className={'opacity-70 mx-1'}/>
						<div className={'p-5'}>
							<p className={'mb-2'}>NEWSROOM</p>
							<div className={'flex flex-row justify-between'}>
								<img src={require('./assets/images/erafone-cepu-blora-1091x_.jpeg')} height={62}
								     width={111}/>
								<div className={'flex flex-col ml-2'}>
									<p className={'mb-1'} style={{fontSize: 8}}>OCTOBER 28 2022</p>
									<p style={{fontSize: 10}}>Erajaya Digital Offices 28 Erafone Store, Welcome to the
										Celebration of Youth Pledge Day</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className={'flex flex-col flex-1 mt-28 items-center px-60'}>
				<p className={'font-bold mb-14'} style={{fontSize: 40}}>Our Strategic Framework</p>
				<img src={require('./assets/images/Framework 2022.png')}/>
				
				<p className={'font-bold mt-28'} style={{fontSize: 40}}>Explore Our Network</p>
				<div className={'flex flex-row flex-1 justify-between w-full mt-16'}>
					<SmallDiv><FontAwesomeIcon icon={faStar} style={{marginRight: 5}}/>97 distribution
						centers</SmallDiv>
					<SmallDiv className={'mx-5'}><FontAwesomeIcon icon={faStar} style={{marginRight: 5}}/>1,447 retail
						outlets</SmallDiv>
					<SmallDiv><FontAwesomeIcon icon={faStar} style={{marginRight: 5}}/>+/- 69,000+ 3 party billed
						outlets</SmallDiv>
				</div>
				<div className={'flex flex-row flex-1 w-full justify-start mt-3'}>
					<p className={'font-light'}>Map of operations (as of 30 September 2022)</p>
				</div>
				<img src={require('./assets/images/MAP Eraa.png')} width={'96%'}/>
				<div className={'flex flex-row flex-1 w-full justify-between my-5'}>
					<div className={'flex flex-row items-center'}>
						<FontAwesomeIcon icon={faCircle} style={{marginRight: 10}}/>Erajaya Distribution Centers & Retail Area
					</div>
					<div className={'flex flex-row items-center'}>
						<FontAwesomeIcon icon={faCircle} style={{marginRight: 10, color: '#FACF4E'}}/>Erajaya Distribution Centers & Retail Area
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
