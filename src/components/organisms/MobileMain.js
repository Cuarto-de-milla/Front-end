import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../sass/components/organisms/MobileMain.scss';

const MobileMain = () => {
	return (
		<div className='mobile'>
			<ul className='mobile__list'>
				<NavLink to='/report'>CREAR REPORTE</NavLink>
				<NavLink to='/login'>LOGIN</NavLink>
				<NavLink to='/register'>REGISTER</NavLink>
			</ul>
		</div>
	);
};

export default MobileMain;
