import React from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { themr } from 'react-css-themr';
import { COMPONENTS } from '../../constants';

const StatisticsWindow = (props) => {
  const {
    areaStatistics,
    theme,
    setStatisticsWindowVisibility,
    isStatisticsWindowVisible,
    setZoom,
    map
  } = props;

  const handleMapClick = () => {
    setZoom(map.getZoom() - 2);
    setStatisticsWindowVisibility(false);
  };

  if (isEmpty(areaStatistics) || !isStatisticsWindowVisible) {
    return null;
  }

  return (
    <Card className={theme.statisticsWindow}>
      <CardTitle
        title={areaStatistics.name}
      />
      <CardText>
        {areaStatistics.value}
        {areaStatistics.indicatorName}
        {areaStatistics.year}
      </CardText>
      <Button
        label="ok"
        onClick={handleMapClick}
      />
    </Card>
  );
};

StatisticsWindow.propTypes = {
  areaStatistics: PropTypes.shape({
    name: PropTypes.string,
    geoJson: PropTypes.string,
    indicatorName: PropTypes.string,
    year: PropTypes.number,
    value: PropTypes.string
  }),
  theme: PropTypes.object.isRequired,
  isStatisticsWindowVisible: PropTypes.bool.isRequired,
  setStatisticsWindowVisibility: PropTypes.func.isRequired,
  map: PropTypes.object,
  setZoom: PropTypes.func.isRequired
};

export default themr(COMPONENTS.STATISTICS_WINDOW)(StatisticsWindow);
