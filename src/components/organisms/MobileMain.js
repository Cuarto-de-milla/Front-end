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
				<NavLink to='/'>HOME</NavLink>
				<NavLink to='/report'>CREAR REPORTE</NavLink>
				<NavLink to='/login'>LOGIN</NavLink>
				<NavLink to='/register'>REGISTER</NavLink>
			</ul>
		</div>,
		document.getElementById('modal')
	);
};

export default MobileMain;
