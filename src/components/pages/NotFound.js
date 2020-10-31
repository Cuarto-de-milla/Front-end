import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/organisms/NotFound.scss';

const NotFound = () => {
	return (
		<div className='notFound'>
			<Link to='/'>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/gasprice-85c9b.appspot.com/o/Foundations%2FLogos%2FLogo2.png?alt=media&token=b4a29437-6dbe-40da-8a32-0f8fb027a067'
					alt='Logo de gas.price'
					className='notFound__image'
				/>
			</Link>
			<h3 className='notFound__text'>
				Ooops, no encontramos lo que buscabas
			</h3>

			<h4 className='notFound__text'>
				Te invitamos a seguir navegando en tu app preferida,
				pica{' '}
				<Link to='/' className='notFound__text-anchor'>
					aqui
				</Link>
			</h4>
		</div>
	);
};

export default NotFound;
