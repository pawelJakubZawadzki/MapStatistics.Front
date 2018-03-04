import { connect } from 'react-redux';
import {
    fetchAreas,
    selectAreas,
    fetchStatistics,
    selectStatistics
} from '../../modules/Map'

const mapDispatchToProps = {
    fetchAreas,
    fetchStatistics
};

const mapStateToProps = state => ({
    areas: selectAreas(state),
    statistics: selectStatistics(state)
});

export default connect(mapStateToProps, mapDispatchToProps);