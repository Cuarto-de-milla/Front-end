import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { AiFillFire } from 'react-icons/ai';
import CardList from '../organisms/CardList';
import ListOfAvgPrices from '../organisms/ListOfAvgPrices';
import getStations from '../../graphql/queries/getStations'
import Map from '../organisms/Map';
import { Link } from 'react-router-dom';
import '../../sass/components/pages/Home.scss';
import Loading from '../molecules/Loading';

const Home = () => {
	const initialFilters = {
		gastype: 'DIESEL',
		station: '',
		city: '',
		first: 15
	}

	const [filters, setFilters] = useState(initialFilters)

	const { loading, error, data, refetch } = useQuery(getStations, {
    	variables: initialFilters
	});

	const handleFiltersChange = ({ target }) => {
		const newFilters = {
			...filters,
			[target.name]: target.value
		}
		setFilters(newFilters);
		refetch(newFilters);
	}


	if (error) return <span>We got an error</span>

	return (
		<div className='home'>
			<header className='home__head'>
				<h4 className='home__head-text'>
					El mejor lugar para buscar estaciones de combustible,
					comparar y reportar abusos en los precios
				</h4>

				<div className='home__head-button'>
					{!localStorage.getItem('token') && <Link to='/register'>
						<button
							className='btn'
							style={{
								backgroundColor: '#001830',
								color: '#fffeea',
								border: '1px solid #fffeea',
							}}
						>
							¡Registrarme!
						</button>
					</Link>}
					<Link to='/'>
						<button
							className='btn'
							style={{
								backgroundColor: '#fffeea',
								color: '#001830',
								border: '1px solid #001830',
							}}
						>
							Ver mas
						</button>
					</Link>
				</div>
			</header>

			<section className='home__filter'>
				<ul className='list'>
					<li className='list__item'>
						<input
							type='text'
							placeholder='Estado'
							className='list__item-input'
							name='station'
							value={filters.station}
							onChange={handleFiltersChange}
						/>
						<AiFillFire
							style={{ color: '#e87461', fontSize: '20px' }}
						/>
					</li>
					<li className='list__item'>
						<input
							type='text'
							placeholder='Ciudad'
							className='list__item-input'
							name='city'
							value={filters.city}
							onChange={handleFiltersChange}
						/>
						<AiFillFire
							style={{ color: '#e87461', fontSize: '20px' }}
						/>
					</li>
					<li className='list__item'>
						<input
							type='text'
							placeholder='Tipo de combustible'
							className='list__item-input'
							name='gastype'
							value={filters.gastype}
							onChange={handleFiltersChange}
						/>
						<AiFillFire
							style={{ color: '#e87461', fontSize: '20px' }}
						/>
					</li>
				</ul>
			</section>

			<section className='home__content'>
				<div className='home__content-prices'>
					<div className='avgPrices'>
						<ul className='avgPrices__list'>
							{ListOfAvgPrices()}
						</ul>
					</div>
					<div className='listPrices'>
						<ul className='listPrices__list'>
							{data && <CardList
							loading={loading}
							data={data}
							/>
						}
						</ul>
					</div>
				</div>
				<div className='home__content-map'>
					<Map
						data={data}
						loading={loading}
						containerElement={
							<div
								className='div1'
								style={{ height: '100%' }}
							></div>
						}
						mapElement={
							<div
								className='div2'
								style={{
									height: '100%',
								}}
							></div>
						}
						loadingElement={<Loading />}
						googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDmbtqh28Uxv1zM38FINetvopdOEHlLIXA`}
					/>
				</div>
			</section>
		</div>
	);
};

export default Home;
