import { connect } from 'react-redux';

import { setStatisticsWindowVisibility } from '../../modules/Map';

const mapDispatchToProps = {
  setStatisticsWindowVisibility
};

export default connect(null, mapDispatchToProps);
