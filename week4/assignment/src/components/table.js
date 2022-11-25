import React from "react";

function Table({data}) {
	return (
		<table>
			<tr style={{fontSize: 20}}>
				{data.map(d => (
					<th style={{padding: 10}}>{d.column}</th>
				))}
			</tr>
			{data.map(d => (
				<td style={{padding: 10}}>
					{d.rows.map(r => (
						<div style={{padding: 10, textAlign: 'center'}}>{r}</div>
					))}
				</td>
			))}
		</table>
	)
}

export default Table