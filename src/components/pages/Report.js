import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import { MdAttachMoney } from 'react-icons/md';
import Map from '../organisms/Map';
import '../../sass/components/pages/Report.scss';

const Report = (props) => {
	const { name, location, type, price } = props;
	return (
		<div className='report'>
			<section className='report__filter'>
				<ul className='list'>
					<li className='list__item'>
						<input
							type='text'
							placeholder='Estado'
							className='list__item-input'
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
						/>
						<AiFillFire
							style={{ color: '#e87461', fontSize: '20px' }}
						/>
					</li>
				</ul>
			</section>

			<section className='report__content'>
				<div className='report__content-form'>
					<div className='card'>
						<li className='card__item'>
							<h4 className='card__item-title'>
								Fuel station name
							</h4>
							<div className='card__item-info'>
								<div className='info__card'>
									<VscLocation
										style={{ fontSize: '25px', color: '#db0a40' }}
									/>
									<p className='info__card-text'>Location</p>
								</div>
								<div className='info__card'>
									<AiFillFire
										style={{ fontSize: '25px', color: '#ffd400' }}
									/>
									<p className='info__card-text'>Fuel Type</p>
								</div>
								<div className='info__card'>
									<MdAttachMoney
										style={{ fontSize: '25px', color: '#6e8894' }}
									/>
									<p className='info__card-text'>Price</p>
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
							<input
								className='formulary__details-file'
								type='file'
								placeholder='Agregar evidencia'
							/>
							<input
								className='formulary__details-price'
								type='text'
								placeholder='Precio a reportar'
							/>
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
