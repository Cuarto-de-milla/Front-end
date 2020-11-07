import React, { useState } from 'react';
import { from, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'

import {
	AiFillFire,
	AiOutlineUpload,
} from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import { MdAttachMoney } from 'react-icons/md';
import Map from '../organisms/Map';
import firebase from 'firebase';

import getStations from '../../graphql/queries/getStations';
import '../../sass/components/pages/Report.scss';
import Loading from '../molecules/Loading';

const Report = () => {
	const { reportId } = useParams();
	const { loading, error, data, refetch } = useQuery(getStations, {
    	variables: {
			id: reportId
		}
	});

	const [picture, setPicture] = useState(null);
	const [uploadValue, setUploadValue] = useState(0);

	const handleUpload = (event) => {
		const file = event.target.files[0];
		const storageRef = firebase
			.storage()
			.ref(`/Fotos/${file.name}`);
		const task = storageRef.put(file);

		task.on(
			'state_changed',
			(snapshot) => {
				let percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) *
					100;
				setUploadValue(percentage);
			},
			(error) => {
				console.log(error.message);
			},
			() => {
				storageRef.getDownloadURL().then((url) => {
					setPicture(url);
				});
			}
		);
	};

	if (loading) return <Loading/>

	const { station, gasType, price } = data.nodePrice.edges[0].node;

	return (
		<div className='report'>
			<section className='report__content'>
				<div className='report__content-form'>
					<div className='card'>
						<li className='card__item'>
							<h4 className='card__item-title'>
								{station.name}
							</h4>
							<div className='card__item-info'>
								<div className='info__card'>
									<VscLocation
										style={{ fontSize: '25px', color: '#db0a40' }}
									/>
									<p className='info__card-text'>{station.town}</p>
								</div>
								<div className='info__card'>
									<AiFillFire
										style={{ fontSize: '25px', color: '#ffd400' }}
									/>
									<p className='info__card-text'>{gasType}</p>
								</div>
								<div className='info__card'>
									<MdAttachMoney
										style={{ fontSize: '25px', color: '#6e8894' }}
									/>
									<p className='info__card-text'>{price}</p>
								</div>
							</div>
						</li>
					</div>
					<div className='formulary'>
						<textarea
							className='formulary__description'
							placeholder='Description'
						></textarea>
						<div className='formulary__details'>
							<h4 className='formulary__details-title'>
								Detalles
							</h4>
							<div className='formulary__details-info'>
								<div className='file'>
									<p className='file__text'>Agregar evidencia</p>
									<AiOutlineUpload size='17' />
									<input
										className='file__input'
										type='file'
										onChange={handleUpload}
									/>
								</div>
								<input
									className='file__price'
									type='text'
									placeholder='Precio a reportar'
								/>
								<MdAttachMoney
									size='20'
									style={{
										position: 'absolute',
										color: 'rgba(0, 0, 0, 0.4)',
										left: 'calc(100% - 38px)',
										top: '60px',
									}}
								/>
							</div>
							<input
								className='formulary__details-button'
								type='submit'
								value='Enviar queja'
								style={{
									color: '#f1e9da',
									backgroundColor: '#e87461',
								}}
							/>
						</div>
					</div>
				</div>
				<div className='report__content-map'>
					<Map
						data={data}
						loading={loading}
						containerElement={
							<div style={{ height: '100%' }}></div>
						}
						mapElement={<div style={{ height: '100%' }}></div>}
						loadingElement={<p>Cargando...</p>}
						googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDmbtqh28Uxv1zM38FINetvopdOEHlLIXA`}
					/>
				</div>
			</section>
		</div>
	);
};

export default Report;
