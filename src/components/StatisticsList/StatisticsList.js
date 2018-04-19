import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListCheckbox } from 'react-toolbox/lib/list';
import isEmpty from 'lodash/isEmpty';
import { themr } from 'react-css-themr';
import { COMPONENTS } from '../../constants';

class StatisticsList extends Component {
  state = {
    selectedAreas: []
  };

  componentWillReceiveProps({ areaStatistics, selectArea }) {
    if (!isEmpty(areaStatistics)) {
      const initialValues = areaStatistics.map(area => ({
        code: area.code,
        isSelected: false
      }));

      initialValues[0].isSelected = true;
      this.setState({ selectedAreas: initialValues });
      selectArea(areaStatistics[0].code);
    }
  }

  handleCheckboxClick = (areaCode) => {
    const { selectArea, areaStatistics } = this.props;

    const selectedAreas = areaStatistics.map(area => ({
      code: area.code,
      isSelected: area.code === areaCode
    }));

    this.setState({ selectedAreas });
    selectArea(areaCode);
  }

  render() {
    const { areaStatistics, theme, setStatisticsWindowVisibility } = this.props;

    if (isEmpty(this.state.selectedAreas)) {
      return null;
    }

    return (
      <div onClick={() => setStatisticsWindowVisibility(true)}>
        <List ripple selectable>
          {areaStatistics.map((area, index) => (
            <ListCheckbox
              key={area.code}
              caption={area.name}
              legend={area.statisticsValue}
              className={theme.listItem}
              checked={this.state.selectedAreas[index].isSelected}
              onChange={() => this.handleCheckboxClick(area.code)}
            />
        ))}
        </List>
      </div>
    );
  }
}

StatisticsList.propTypes = {
  areaStatistics: PropTypes.arrayOf(PropTypes.shape({
    statisticsValue: PropTypes.string,
    code: PropTypes.string,
    name: PropTypes.string
  })),
  selectArea: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  setStatisticsWindowVisibility: PropTypes.func.isRequired
};

export default themr(COMPONENTS.STATISTICS_LIST)(StatisticsList);
