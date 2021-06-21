
// import React, { useState, useEffect } from "react";

// import {REACT_APP_GOOGLE_KEY} from '../service/config';
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";

function Map() {
	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: 41.871941, lng: 12.56738 }}
		/>
	);
}
const MapWrapped = withScriptjs(withGoogleMap(Map));
export function GlobalMap() {
	return (
		<div style={{ width: "60vw", height: "90vh", marginTop: "100px" }}>
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
				// googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key`}

				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100%` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}
export default GlobalMap;
