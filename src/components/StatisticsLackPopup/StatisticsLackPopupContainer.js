import { connect } from 'react-redux';

import { selectIsStatisticsLackPopupVisible, hideStatisticsLackPopup } from '../../modules/Map';

const mapDispatchToProps = {
  hideStatisticsLackPopup
};

const mapStateToProps = state => ({
  isStatisticsLackPopupVisible: selectIsStatisticsLackPopupVisible(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
