import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileMain from '../organisms/MobileMain';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import '../../sass/components/templates/Layout.scss';

const Layout = (props) => {
	const { children, img, imgText } = props;
	const [flag, setFlag] = useState(false);

	const putContent = () => {
		if (window.screen.width < 600) {
			const icon = flag ? (
				<AiOutlineClose
					size='40'
					color='#fffeea'
					onClick={() => (flag ? setFlag(false) : setFlag(true))}
				/>
			) : (
				<GiHamburgerMenu
					size='40'
					color='#fffeea'
					onClick={() => (flag ? setFlag(false) : setFlag(true))}
				/>
			);
			return icon;
		}

		return (
			<nav className='header__nav'>
				<NavLink to='/report'>CREAR REPORTE</NavLink>
				<NavLink to='/login'>LOGIN</NavLink>
				<NavLink to='/register'>REGISTRARME</NavLink>
			</nav>
		);
	};

	return (
		<>
			<header className='header'>
				<Link to='/' className='header__anchor'>
					<img
						className='header__logo'
						src={
							img
								? img
								: 'https://firebasestorage.googleapis.com/v0/b/gasprice-85c9b.appspot.com/o/Foundations%2FLogos%2Flogo.png?alt=media&token=2a6fd194-791f-44dc-9962-deaf5489fda0'
						}
						alt={imgText ? imgText : 'Logo de Gas-Price'}
					/>
				</Link>
				{putContent()}
				{flag ? <MobileMain /> : null}
			</header>
			{children}
		</>
	);
};

export default Layout;
