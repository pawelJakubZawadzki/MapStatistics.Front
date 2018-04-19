import { connect } from 'react-redux';

import {
  selectSelectedAreaStatistics,
  setStatisticsWindowVisibility,
  selectIsStatisticsWindowVisible,
  setZoom,
  selectMap,
  selectIsStatisticsLackPopupVisible
} from '../../modules/Map';

const mapDispatchToProps = {
  setStatisticsWindowVisibility,
  setZoom
};

const mapStateToProps = state => ({
  areaStatistics: selectSelectedAreaStatistics(state),
  isStatisticsWindowVisible: selectIsStatisticsWindowVisible(state),
  map: selectMap(state),
  isStatisticsLackPopupVisible: selectIsStatisticsLackPopupVisible(state)
});


export default connect(mapStateToProps, mapDispatchToProps);
