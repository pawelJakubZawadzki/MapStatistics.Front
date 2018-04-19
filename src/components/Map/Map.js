import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import PropTypes from 'prop-types';
import Area from '../Area';

const config = {
  defaultZoom: 2,
  defaultCenter: { lat: 51.795445, lng: 14.590378 },
  mapTypeId: 'hybrid'
};

class Map extends Component {
  state = {
    map: {}
  };

  componentDidMount() {
    const { setMap } = this.props;

    setMap(this.state.map);
  }

  handleMapClick = () => {
    const { setZoom, setStatisticsWindowVisibility, isStatisticsWindowVisible } = this.props;

    if (isStatisticsWindowVisible) {
      setZoom(this.state.map.getZoom() - 1);
      setStatisticsWindowVisibility(false);
    }
  };

  render() {
    const { zoom } = this.props;

    return (
      <div>
        <GoogleMap
          defaultCenter={config.defaultCenter}
          mapTypeId={config.mapTypeId}
          ref={(ref) => { this.state.map = ref; }}
          zoom={zoom}
          onClick={this.handleMapClick}
        />
        <Area />
      </div>
    );
  }
}

Map.propTypes = {
  zoom: PropTypes.number,
  setMap: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
  setStatisticsWindowVisibility: PropTypes.func.isRequired,
  isStatisticsWindowVisible: PropTypes.bool.isRequired
};

Map.defaultProps = {
  zoom: config.defaultZoom
};

export default withScriptjs(withGoogleMap(Map));
