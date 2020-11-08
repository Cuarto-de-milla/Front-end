import React, { useState } from 'react';
import {
	GoogleMap,
	withGoogleMap,
	withScriptjs,
	Marker,
	InfoWindow,
} from 'react-google-maps';
import mapStyle from '../../assets/mapStyle';
import Loading from '../molecules/Loading';
import '../../sass/components/organisms/Map.scss';

const Map = ({ zoom, lat, lng, data, loading }) => {
	const [flag, setFlag] = useState(null);
	if (loading) return <Loading />;

	const options = {
		styles: mapStyle,
		disableDefaultUI: true,
		zoomControl: true,
	};

	return (
		<GoogleMap
			defaultZoom={zoom ? zoom : 4}
			defaultCenter={{
				lng: lng ? lng : -99.1686937,
				lat: lat ? lat : 19.4270206,
			}}
			options={options}
		>
			{data.nodePrice.edges.map((marker) => (
				<Marker
					key={marker.node.id}
					position={{
						lat: marker.node.station.latitude
							? marker.node.station.latitude
							: 20.71413,
						lng: marker.node.station.longitude
							? marker.node.station.longitude
							: -103.3042,
					}}
					onClick={() => {
						setFlag(marker);
					}}
				/>
			))}
			{flag ? (
				<InfoWindow
					position={{
						lat: flag.node.station.latitude,
						lng: flag.node.station.longitude,
					}}
					onCloseClick={() => {
						setFlag(null);
					}}
				>
					<div className='detail'>
						<h4 className='detail__title'>Detalle</h4>
						<h6 className='detail__name'>
							Estacion:
							<span> {flag.node.station.name}</span>
						</h6>
						<h6 className='detail__name'>
							Town:
							<span>{flag.node.station.town}</span>
						</h6>
						<h6 className='detail__name'>
							Fuel Type:
							<span>{flag.node.gasType}</span>
						</h6>
						<h6 className='detail__name'>
							Price:
							<span>${flag.node.price}</span>
						</h6>
					</div>
				</InfoWindow>
			) : null}
		</GoogleMap>
	);
};

export default withScriptjs(withGoogleMap(Map));
