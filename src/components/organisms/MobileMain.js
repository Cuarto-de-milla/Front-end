import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import '../../sass/components/organisms/MobileMain.scss';

const MobileMain = (props) => {
	if (!props.isOpen) {
		return null;
	}
	return ReactDOM.createPortal(
		<div className='mobile'>
			<ul className='mobile__list'>
				<NavLink to='/home' activeClassName='selected'>
					HOME
				</NavLink>
				<NavLink to='/result' activeClassName='selected'>
					CREAR REPORTE
				</NavLink>
				<NavLink to='/login' activeClassName='selected'>
					LOGIN
				</NavLink>
				<NavLink to='/register' activeClassName='selected'>
					REGISTER
				</NavLink>
			</ul>
		</div>,
		document.getElementById('modal')
	);
};

export default MobileMain;
