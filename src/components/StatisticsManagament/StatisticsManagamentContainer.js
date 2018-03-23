import { connect } from 'react-redux';

import {
  fetchIndicators,
  fetchYears,
  selectIndicators,
  selectYears,
  fetchStatistics,
  fetchAreas,
  selectAreas,
  setStatisticsWindowVisibility,
  selectArea
} from '../../modules/Map';

const mapDispatchToProps = {
  fetchIndicators,
  fetchYears,
  fetchStatistics,
  fetchAreas,
  setStatisticsWindowVisibility,
  selectArea
};

const mapStateToProps = state => ({
  indicators: selectIndicators(state),
  years: selectYears(state),
  areas: selectAreas(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
