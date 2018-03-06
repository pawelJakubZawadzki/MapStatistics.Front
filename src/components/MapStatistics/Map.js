import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const config = {
  defaultZoom: 8,
  defaultCenter: { lat: -34.397, lng: 150.644 },
};

const Map = () => (
  <GoogleMap
    defaultZoom={config.defaultZoom}
    defaultCenter={config.defaultCenter}
  />
);

export default withScriptjs(withGoogleMap(Map));
