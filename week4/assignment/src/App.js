import logo from './logo.svg';
import './App.css';

import Table from "./components/table";
import {useEffect, useState, useCallback} from "react";

function App() {
	const [data, setData] = useState([
		{column: 'Currency', rows: ['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP']},
		{column: 'We Buy', rows: []},
		{column: 'Exchange Rate', rows: []},
		{column: 'We Sell', rows: []}
	])
	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		getCurrency().then(res => {
			let tmp = [...data]
			const rates = res.rates
			
			tmp.map((item, index) => {
				switch (index) {
					case 1:
						tmp[index].rows = []
						tmp[0].rows.map(curr => {
							tmp[index].rows.push((parseFloat(rates[curr]) * 0.05) + parseFloat(rates[curr]))
						})
						break
					case 2:
						tmp[index].rows = []
						tmp[0].rows.map(curr => {
							tmp[index].rows.push(rates[curr])
						})
						break
					case 3:
						tmp[index].rows = []
						tmp[0].rows.map(curr => {
							tmp[index].rows.push(parseFloat(rates[curr]) - (parseFloat(rates[curr]) * 0.05))
						})
						break
				}
			})
			
			setData(tmp)
			setLoading(false)
		})
	}, [])
	
	const getCurrency = useCallback(async () => {
		try {
			setLoading(true)
			let response = await fetch('https://api.currencyfreaks.com/latest?apikey=0ea50fe07a5c43fc8983c23e9865b1d3')
			return response.json()
		} catch (e) {
			console.log(e)
		}
	}, [])
	
	return (
		<div>
			{loading ?
				<div className={'App-loading'}>
					<img src={require('./assets/images/loading.gif')}/>
				</div>
				:
				<div className={'App'}>
					<Table data={data}/>
				</div>
			}
		</div>
	);
}

export default App;
