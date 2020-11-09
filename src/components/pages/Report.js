import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReportCard from '../organisms/ReportCard';
import ReportCardList from '../organisms/ReportCardList';

import createComplain from '../../graphql/mutations/createComplain';
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
import { formatError } from 'graphql';

const Report = () => {
	const { reportId } = useParams();
	const { loading, data } = useQuery(getStations, {
		variables: {
			id: reportId,
		},
	});

	const [form, setForm] = useState({});

	const handleInputChange = ({ target }) =>
		setForm({
			...form,
			[target.name]: target.value,
		});

	const [picture, setPicture] = useState(null);
	const [uploadValue, setUploadValue] = useState(0);

	const [sendComplain] = useMutation(createComplain, {
		onCompleted(data) {
			console.log(data);
			Swal.fire({
				title:
					'<h4 style="color : #ffffff">Tu queja fue creada exitosamente!</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});
		},
		onError(error) {
			console.log(error.graphQLErrors);
			Swal.fire({
				title:
					'<h4 style="color : #ffffff">Queja creada exitosamente!</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});
		},
	});

	const handleSubmit = () => {
		if (!form.description)
			Swal.fire({
				title:
					'<h4 style="color : #ffffff">Debes colocar una descripcion a la queja!</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});
		if (!form.offeredPrice)
			Swal.fire({
				title:
					'<h4 style="color : #ffffff">Debes colocar el precio de la queja!</h4>',
				background: '#001830',
				timer: 20000,
				timerProgressBar: true,
				width: '320px',
				footer:
					'<h4 style="color: #db0a40">Cuartodemilla.com</h4>',
				padding: '5% 10px 20px',
			});
		if (!picture) alert('Debes subir una foto!');

		sendComplain({
			variables: {
				description: form.description,
				linkEvidence: picture,
				offeredPrice: form.offeredPrice,
				typeComplaint: 'normal',
				priceId: 1,
			},
		});
	};

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

	if (loading) return <Loading />;

	const {
		station,
		gasType,
		price,
	} = data.nodePrice.edges[0].node;

	return (
		<div className='report'>
			<section className='report__content'>
				<div className='report__content-form'>
					<div className='card'>
						<li className='card__item'>
							<h4 className='card__item-title'>{station.name}</h4>
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
							name='description'
							placeholder='Description'
							onChange={handleInputChange}
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
									type='number'
									onChange={handleInputChange}
									name='offeredPrice'
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
								type='button'
								onClick={handleSubmit}
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
			<section className='report__reportCard'>
				<ReportCardList />
			</section>
		</div>
	);
};

export default Report;
