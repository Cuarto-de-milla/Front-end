import React from 'react';
import ReportCard from './ReportCard';

const ReportCardList = () => {
	return [1, 2, 3, 4].map((item) => (
		<ReportCard key={item} />
	));
};

export default ReportCardList;
