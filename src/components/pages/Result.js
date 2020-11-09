import React from 'react';
import { AiFillFire } from 'react-icons/ai';
import '../../sass/components/organisms/Result.scss';

const Result = () => {
	return (
		<div className='result'>
			<section className='result__filter'>
				<div className='result__filter-prices'>
					<h4 className='title'>Filtrar precios</h4>
					<ul className='list'>
						<li className='list__item'>
							<input
								type='text'
								placeholder='Estado'
								className='list__item-input'
								name='station'
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
								name='station'
							/>
							<AiFillFire
								style={{ color: '#e87461', fontSize: '20px' }}
							/>
						</li>
						<li className='list__item'>
							<input
								type='text'
								placeholder='Precio'
								className='list__item-input'
								name='station'
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
								name='station'
							/>
							<AiFillFire
								style={{ color: '#e87461', fontSize: '20px' }}
							/>
						</li>
						<li className='list__item'>
							<input
								type='text'
								placeholder='Fecha'
								className='list__item-input'
								name='station'
							/>
							<AiFillFire
								style={{ color: '#e87461', fontSize: '20px' }}
							/>
						</li>
					</ul>
				</div>
			</section>

			<section className='result__filter'>
				<div className='result__filter-report'>
					<h4 className='title'>Estaiciones Reportadas</h4>
					<ul className='list'>
						<li className='list__item'>
							<input
								type='text'
								placeholder='Estado'
								className='list__item-input'
								name='station'
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
								name='station'
							/>
							<AiFillFire
								style={{ color: '#e87461', fontSize: '20px' }}
							/>
						</li>
						<li className='list__item'>
							<input
								type='text'
								placeholder='Fecha'
								className='list__item-input'
								name='station'
							/>
							<AiFillFire
								style={{ color: '#e87461', fontSize: '20px' }}
							/>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default Result;
