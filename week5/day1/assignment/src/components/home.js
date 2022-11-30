import React from 'react'
import {Button} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faChevronDown, faCircle, faDownload, faStar} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

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

const Footer = styled.div`
  background-color: #272727;
  display: flex;
  flex-direction: column;
  flex: 1
`

const SubText = styled.p`
  font-size: 12px;
  color: #8e8e8e;
  padding-bottom: 5px;
`

function Home() {
	return (
		<div className={'relative'}>
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
								<img src={require('../assets/images/erafone-cepu-blora-1091x_.jpeg')} height={62}
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
				<img src={require('../assets/images/Framework 2022.png')}/>
				
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
				<img src={require('../assets/images/MAP Eraa.png')} width={'96%'}/>
				<div className={'flex flex-row flex-1 w-full justify-between my-10'}>
					<div className={'flex flex-row items-center'}>
						<FontAwesomeIcon icon={faCircle} style={{marginRight: 10}}/>Erajaya Distribution Centers &
						Retail Area
					</div>
					<div className={'flex flex-row items-center'}>
						<FontAwesomeIcon icon={faCircle} style={{marginRight: 10, color: '#FACF4E'}}/>Erajaya
						Distribution Centers & Retail Area
					</div>
				</div>
				
				<div className={'flex flex-row flex-1 w-full px-10 py-3 mb-3 text-white font-bold'}
				     style={{backgroundColor: '#11074e', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
					<div className={'flex flex-col flex-1'}>
						<p>AREA</p>
					</div>
					<div className={'flex flex-col flex-1 items-center'}>
						<p>DISTRIBUTION CENTER</p>
					</div>
					<div className={'flex flex-col flex-1 items-center'}>
						<p>RETAIL</p>
					</div>
				</div>
				<div className={'flex flex-row flex-1 w-full px-10 py-3 mb-3 shadow'}
				     style={{borderRadius: 10}}>
					<div className={'flex flex-row flex-1 justify-between items-center pr-5'}>
						<p>Java & Bali</p>
						<FontAwesomeIcon icon={faChevronDown} fontSize={12}/>
					</div>
					<div className={'flex flex-col flex-1 items-center border-x'}>
						<p>52</p>
					</div>
					<div className={'flex flex-col flex-1 items-center'}>
						<p>972</p>
					</div>
				</div>
				<div className={'flex flex-row flex-1 w-full px-10 py-3 mb-3 shadow'}
				     style={{borderRadius: 10}}>
					<div className={'flex flex-row flex-1 justify-between items-center pr-5'}>
						<p>Sumatera</p>
						<FontAwesomeIcon icon={faChevronDown} fontSize={12}/>
					</div>
					<div className={'flex flex-col flex-1 items-center border-x'}>
						<p>24</p>
					</div>
					<div className={'flex flex-col flex-1 items-center'}>
						<p>168</p>
					</div>
				</div>
				<div className={'flex flex-row flex-1 w-full px-10 py-3 mb-3 shadow'}
				     style={{borderRadius: 10}}>
					<div className={'flex flex-row flex-1 justify-between items-center pr-5'}>
						<p>Kalimantan</p>
						<FontAwesomeIcon icon={faChevronDown} fontSize={12}/>
					</div>
					<div className={'flex flex-col flex-1 items-center border-x'}>
						<p>8</p>
					</div>
					<div className={'flex flex-col flex-1 items-center'}>
						<p>52</p>
					</div>
				</div>
				<div className={'flex flex-row flex-1 w-full px-10 py-3 mb-3 shadow'}
				     style={{borderRadius: 10}}>
					<div className={'flex flex-row flex-1 justify-between items-center pr-5'}>
						<p>Sulawesi & Others</p>
						<FontAwesomeIcon icon={faChevronDown} fontSize={12}/>
					</div>
					<div className={'flex flex-col flex-1 items-center border-x'}>
						<p>7</p>
					</div>
					<div className={'flex flex-col flex-1 items-center'}>
						<p>79</p>
					</div>
				</div>
				<div className={'flex flex-row flex-1 w-full px-10 py-3 mb-3 shadow'}
				     style={{borderRadius: 10}}>
					<div className={'flex flex-row flex-1 justify-between items-center pr-5'}>
						<p>Overseas</p>
						<FontAwesomeIcon icon={faChevronDown} fontSize={12}/>
					</div>
					<div className={'flex flex-col flex-1 items-center border-x'}>
						<p>6</p>
					</div>
					<div className={'flex flex-col flex-1 items-center'}>
						<p>176</p>
					</div>
				</div>
			</div>
			
			<div className={'flex flex-row flex-1 mt-10 text-white'}>
				<div className={'bg-responsibility w-full bg-cover'} style={{height: '60vh'}}>
					<div className={'flex flex-col flex-1 items-center justify-center h-full backdrop-brightness-50'}>
						<p className={'font-bold text-2xl'}>Our Responsibility</p>
						<p className={'my-5'}>We are here, we care, and we are responsible</p>
						<Button variant={'contained'} style={{
							backgroundColor: '#11074e',
							borderRadius: 10,
							fontSize: 13,
							paddingLeft: 25,
							paddingRight: 25,
						}}>See More</Button>
					</div>
				</div>
				<div className={'bg-report w-full bg-cover'} style={{height: '60vh'}}>
					<div className={'flex flex-col flex-1 items-center justify-center h-full backdrop-brightness-50'}>
						<p className={'font-bold text-2xl'}>Get Our Latest Annual Report</p>
						<p className={'my-5'}>Check out our performance over the past year our ambitions for the years
							ahead</p>
						<Button variant={'contained'} style={{
							backgroundColor: '#11074e',
							borderRadius: 10,
							fontSize: 13,
							paddingLeft: 25,
							paddingRight: 25,
						}}><FontAwesomeIcon icon={faDownload} style={{marginRight: 10}}/>Download</Button>
					</div>
				</div>
			</div>
			
			{/*footer*/
			}
			<Footer>
				<div className={'flex flex-row flex-1 px-44 py-8'}>
					<div className={'flex flex-col flex-1 text-white'}>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>ABOUT US</p>
						<SubText>Company Profile</SubText>
						<SubText>Vision & Mission</SubText>
						<SubText>Awards</SubText>
						<SubText>Milestones</SubText>
						<SubText>Management Profile</SubText>
					</div>
					<div className={'flex flex-col flex-1 text-white'}>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>INVESTOR RELATIONS</p>
						<SubText>Financial Highlights</SubText>
						<SubText>Financial Reports</SubText>
						<SubText>Annual Reports</SubText>
						<SubText>Investor Update</SubText>
						<SubText>Prospectus</SubText>
						<SubText>General Meeting of Shareholders</SubText>
						<SubText>Stock Price Information</SubText>
					</div>
					<div className={'flex flex-col flex-1 text-white'}>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>SOCIAL AND EVENTS</p>
						<SubText>Newsroom</SubText>
						<SubText>Social Responsibilities</SubText>
						<SubText>CSR Events</SubText>
					</div>
					<div className={'flex flex-col flex-1 text-white'}>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>CORPORATE GOVERNANCE</p>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>SUBSIDIARIES & AFFILIATES</p>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>CAREER</p>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>CONTACT US</p>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>E-COMMERCE</p>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>DISCLAIMER</p>
					</div>
					<div className={'flex flex-col flex-1 text-white'}>
						<p className={'font-semibold mb-2'} style={{fontSize: 14}}>GET IN TOUCH</p>
						<SubText>
							Jl. Bandengan Selatan No. 19-20<br/>
							Pekojan - Tambora, Jakarta Barat<br/>
							11240, Indonesia<br/>
							P. +62 21 690 5788<br/>
							F. +62 21 690 5789<br/>
							M. corporate@erajaya.com
						</SubText>
					</div>
				</div>
				
				<hr/>
				<div className={'flex flex-row flex-1 px-44 py-3 justify-between items-center'}>
					<SubText>Copyright © 2020 ERAJAYA.COM. ALL RIGHTS RESERVED</SubText>
					<div className={'flex flex-row flex-1 justify-end'} style={{color: 'rgba(255,255,255,0.5)'}}>
						<FontAwesomeIcon icon={faFacebookF} style={{marginRight: 20}}/>
						<FontAwesomeIcon icon={faInstagram}/>
					</div>
				</div>
			
			</Footer>
		</div>
	)
}

export default Home