import React from 'react';

const ListOfAvgPrices = () => {
	const data = [
		{
			type: 'Diesel',
			date: '09/11/2020',
			price: '$ 18.79',
		},
		{
			type: 'Premium',
			date: '09/11/2020',
			price: '$ 19.19',
		},
		{
			type: 'Regular',
			date: '09/11/2020',
			price: '$ 18.15',
		},
	];

	return data.map((item, index) => (
		<li className='avgPrices__list-item' key={index}>
			<div className='head'>
				<h4 className='title'>
					{item.type ? item.type : 'Diesel'}
				</h4>
				<h4 className='subtitle'>
					{item.date ? item.date : '20/10/2020'}
				</h4>
			</div>
			<div className='footer'>
				<h4 className='title'>
					{item.price ? item.price : '$ 9.00'}
				</h4>
				<h4 className='subtitle'>Avg Price</h4>
			</div>
		</li>
	));
};

export default ListOfAvgPrices;
