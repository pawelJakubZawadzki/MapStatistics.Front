import React from 'react';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import AppBar from 'react-toolbox/lib/app_bar';
import Map from '../Map';
import StatisticsManagament from '../StatisticsManagament';
import StatisticsList from '../StatisticsList';
import StatisticsWindow from '../StatisticsWindow';
import { COMPONENTS, GOOGLE_MAPS_API_URL } from '../../constants';

const MapStatistics = ({ theme }) => {
  const loadingElement = <div className={theme.loadingElement} />;
  const containerElement = <div className={theme.containerElement} />;
  const mapElement = (
    <div
      className={theme.mapElement}
    />
  );

  return (
    <div className={theme.layout}>
      <AppBar title="Statistics Map" />
      <StatisticsManagament />
      <StatisticsWindow />
      <div className={theme.mapAreasContainer}>
        <Map
          googleMapURL={GOOGLE_MAPS_API_URL}
          loadingElement={loadingElement}
          containerElement={containerElement}
          mapElement={mapElement}
        />
        <div className={theme.areaList}>
          <StatisticsList />
        </div>
      </div>
    </div>
  );
};

MapStatistics.propTypes = {
  theme: PropTypes.object.isRequired
};

export default themr(COMPONENTS.MAP_STATISTICS)(MapStatistics);
