import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import { MdAttachMoney } from 'react-icons/md';

const ListOfCard = () => {
	return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
		(item, index) => (
			<li className='listPrices__list-item' key={index}>
				<h4 className='title'>
					{item.name ? item.name : 'Fuel station name'}
				</h4>
				<div className='info'>
					<div className='info__card'>
						<VscLocation
							style={{ fontSize: '25px', color: '#db0a40' }}
						/>
						<p className='info__card-text'>
							{item.location ? item.location : 'Location'}
						</p>
					</div>
					<div className='info__card'>
						<AiFillFire
							style={{ fontSize: '25px', color: '#ffd400' }}
						/>
						<p className='info__card-text'>
							{item.type ? item.type : 'Fuel Type'}
						</p>
					</div>
					<div className='info__card'>
						<MdAttachMoney
							style={{ fontSize: '25px', color: '#6e8894' }}
						/>
						<p className='info__card-text'>
							{item.price ? item.price : 'Price'}
						</p>
					</div>
				</div>
			</li>
		)
	);
};

export default ListOfCard;