import { connect } from 'react-redux';

import {
  selectSelectedAreaStatistics,
  selectMap,
  setZoom
} from '../../modules/Map';

const mapDispatchToProps = {
  setZoom
};

const mapStateToProps = state => ({
  areaStatistics: selectSelectedAreaStatistics(state),
  map: selectMap(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
