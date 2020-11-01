import React from 'react';

const ListOfAvgPrices = () => {
	return [1, 2, 3].map((item, index) => (
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