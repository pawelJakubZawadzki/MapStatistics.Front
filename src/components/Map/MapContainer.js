import { connect } from 'react-redux';
import { selectZoom, setMap, setZoom, setStatisticsWindowVisibility } from '../../modules/Map';

const mapDispatchToProps = {
  setMap,
  setZoom,
  setStatisticsWindowVisibility
};

const mapStateToProps = state => ({
  zoom: selectZoom(state)
});

export default connect(mapStateToProps, mapDispatchToProps);
