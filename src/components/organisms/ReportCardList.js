import React from 'react';
import ReportCard from './ReportCard';

const ReportCardList = () => {
	const data = [
		{
			name: 'Alexander Mandraque',
			date: '01/10/2020',
			text: `Robo en los precios de todos los tipos de combustible`,
		},
		{
			name: 'Mario Rios',
			date: '01/11/2020',
			text: `Reporto por inconsistencia con los precios de operacion en la estacion`,
		},
		{
			name: 'Luis Cardenas',
			date: '05/11/2020',
			text: `Robo en los precios de todos los tipos de combustible`,
		},
		{
			name: 'Maria Velez',
			date: '05/11/2020',
			text: `Reporto por inconsistencia con los precios de operacion en la estacion`,
		},
		{
			name: 'Caral Giraldo',
			date: '05/11/2020',
			text: `Robo en los precios de todos los tipos de combustible`,
		},
	];
	return data.map((item, index) => (
		<ReportCard key={index} {...item} />
	));
};

export default ReportCardList;
