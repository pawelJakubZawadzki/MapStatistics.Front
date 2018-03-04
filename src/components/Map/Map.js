import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
    componentWillMount() {
        const { fetchAreas } = this.props;

        fetchAreas();
    }

    render() {
        const { areas } = this.props;
        
        return areas.map(area =>
            <p>{area}</p>
        );
    }
}

Map.propTypes = {
    fetchAreas: PropTypes.func.isRequired,
    areas: PropTypes.array.isRequired,
    fetchStatistics: PropTypes.func.isRequired,
    statistics: PropTypes.array.isRequired
};

export default Map;