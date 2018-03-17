import React, { Component } from 'react';
import { Polygon } from 'react-google-maps';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { google } from 'global/window';

const config = {
  polygonProperties: {
    strokeWeight: 0,
    fillColor: '#0078D7',
    fillOpacity: 0.2
  },
  mapPadding: { left: 100 }
};

class Area extends Component {
  componentWillReceiveProps({ map, areaStatistics, setZoom }) {
    if (!isEmpty(map) && !isEmpty(areaStatistics)) {
      const latLngBounds = new google.maps.LatLngBounds();
      this.getCoordinatesFromGeoJson(areaStatistics.geoJson)
        .forEach((coordinate) => {
          latLngBounds.extend(coordinate);
        });

      map.fitBounds(latLngBounds, config.mapPadding);
      setZoom(map.getZoom());
    }
  }

  getCoordinatesFromGeoJson = geoJson =>
    JSON.parse(geoJson)
      .map(areaCoordinates => (
        { lat: areaCoordinates[1], lng: areaCoordinates[0] }
      ))

  render() {
    const { areaStatistics } = this.props;

    if (isEmpty(areaStatistics)) {
      return null;
    }

    return (
      <Polygon
        paths={this.getCoordinatesFromGeoJson(areaStatistics.geoJson)}
        options={config.polygonProperties}
      />
    );
  }
}

Area.propTypes = {
  areaStatistics: PropTypes.shape({
    name: PropTypes.string,
    geoJson: PropTypes.string,
    indicatorName: PropTypes.string,
    year: PropTypes.number,
    value: PropTypes.string
  }),
  map: PropTypes.object,
  setZoom: PropTypes.func.isRequired
};

export default Area;
