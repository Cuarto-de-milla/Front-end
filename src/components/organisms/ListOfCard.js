import React from 'react';
import {
	AiFillFire,
	AiFillCaretRight,
} from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import { MdAttachMoney } from 'react-icons/md';
import Loading from '../molecules/Loading';

import { useQuery } from '@apollo/client';
import getStations from '../../graphql/queries/getStations';

const ListOfCard = () => {
	const { loading, error, data, refetch } = useQuery(
		getStations,
		{
			variables: { first: 100 },
		}
	);

	if (loading) return <Loading />;
	if (error) return <span>We got an error</span>;

	return data.nodePrice.edges.map((item, index) => (
		<li className='listPrices__list-item' key={index}>
			<h4 className='title'>
				{item.node.station.name
					? item.node.station.name
					: 'Fuel station name'}
			</h4>
			<div className='info'>
				<div className='info__card'>
					<VscLocation
						style={{ fontSize: '25px', color: '#db0a40' }}
					/>
					<p className='info__card-text'>
						{item.node.station.town
							? item.node.station.town
							: 'Location'}
					</p>
				</div>
				<div className='info__card'>
					<AiFillFire
						style={{ fontSize: '25px', color: '#ffd400' }}
					/>
					<p className='info__card-text'>
						{item.node.gasType ? item.node.gasType : 'Fuel Type'}
					</p>
				</div>
				<div className='info__card'>
					<MdAttachMoney
						style={{ fontSize: '25px', color: '#6e8894' }}
					/>
					<p className='info__card-text'>
						{item.node.price ? item.node.price : 'Price'}
					</p>
				</div>
				<div className='info__report'>
					<AiFillCaretRight size='20' color='#db0a40' />
					<p className='info__report-text'>Reportar</p>
				</div>
			</div>
		</li>
	));
};

export default ListOfCard;
