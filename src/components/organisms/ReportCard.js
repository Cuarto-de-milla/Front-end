import React from 'react';
import '../../sass/components/organisms/ReportCard.scss';

const ReportCard = ({ text, name, date }) => {

	return (
		<div className='cardReport'>
			<div className='cardReport__head'>
				<h6 className='cardReport__head-name'>{name}</h6>
				<h6 className='cardReport__head-date'>{date}</h6>
			</div>
			<p className='cardReport__text'>{text}</p>
		</div>
	);
};

export default ReportCard;
