import React from 'react';
import {
	GoogleMap,
	withGoogleMap,
	withScriptjs,
	Marker,
} from 'react-google-maps';
import mapStyle from '../../assets/mapStyle';

import Loading from '../molecules/Loading';

const Map = ({ zoom, lat, lng, data , loading}) => {
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
				/>
			))}
		</GoogleMap>
	);
};

export default withScriptjs(withGoogleMap(Map));
