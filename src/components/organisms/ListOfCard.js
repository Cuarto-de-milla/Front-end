import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import { MdAttachMoney } from 'react-icons/md';

const ListOfCard = ({name, location, type, price}) => <li className='listPrices__list-item'>
	<h4 className='title'>
		{name ? name : 'Fuel station name'}
	</h4>
	<div className='info'>
		<div className='info__card'>
			<VscLocation
				style={{ fontSize: '25px', color: '#db0a40' }}
			/>
			<p className='info__card-text'>
				{location ? location : 'Location'}
			</p>
		</div>
		<div className='info__card'>
			<AiFillFire
				style={{ fontSize: '25px', color: '#ffd400' }}
			/>
			<p className='info__card-text'>
				{type ? type : 'Fuel Type'}
			</p>
		</div>
		<div className='info__card'>
			<MdAttachMoney
				style={{ fontSize: '25px', color: '#6e8894' }}
			/>
			<p className='info__card-text'>
				{price ? price : 'Price'}
			</p>
		</div>
	</div>
</li>

export default ListOfCard;