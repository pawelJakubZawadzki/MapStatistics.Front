import { connect } from 'react-redux';

import { selectArea, selectAreaStatistics, setStatisticsWindowVisibility } from '../../modules/Map';

const mapDispatchToProps = {
  selectArea,
  setStatisticsWindowVisibility
};

const mapStateToProps = state => ({
  areaStatistics: selectAreaStatistics(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
