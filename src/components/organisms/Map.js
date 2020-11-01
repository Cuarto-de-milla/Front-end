import React from 'react';
import {
	GoogleMap,
	withGoogleMap,
	withScriptjs,
} from 'react-google-maps';
import mapStyle from '../../assets/mapStyle';

const Map = (props) => {
  const { zoom, lat, lng } = props;
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
		/>
	);
};

export default withScriptjs(withGoogleMap(Map));
