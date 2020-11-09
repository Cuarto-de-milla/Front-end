import React from 'react';
import '../../sass/components/organisms/ReportCard.scss';

const ReportCard = () => {
	return (
		<div className='cardReport'>
			<div className='cardReport__head'>
				<h6 className='cardReport__head-name'>
					Alexander Mandraque
				</h6>
				<h6 className='cardReport__head-date'>01/10/2020</h6>
			</div>
			<p className='cardReport__text'>
				Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Doloremque, impedit! Ad recusandae sint explicabo
				fugit!
			</p>
		</div>
	);
};

export default ReportCard;
