import React from 'react';
import '../../sass/components/molecules/Loading.scss';

const Loading = () => {
	return (
		<div className='loading__container'>
			<div className='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
