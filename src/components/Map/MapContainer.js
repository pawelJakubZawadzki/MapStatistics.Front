import { connect } from 'react-redux';
import {
  selectZoom,
  setMap,
  setZoom,
  setStatisticsWindowVisibility,
  selectIsStatisticsWindowVisible
} from '../../modules/Map';

const mapDispatchToProps = {
  setMap,
  setZoom,
  setStatisticsWindowVisibility
};

const mapStateToProps = state => ({
  zoom: selectZoom(state),
  isStatisticsWindowVisible: selectIsStatisticsWindowVisible(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
