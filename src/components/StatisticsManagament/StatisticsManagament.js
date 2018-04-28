import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Button } from 'react-toolbox/lib/button';
import { themr } from 'react-css-themr';
import isEmpty from 'lodash/isEmpty';
import { COMPONENTS } from '../../constants';
import {
  INDICATOR_LABEL,
  YEAR_LABEL,
  BUTTON_LABEL,
  INITIAL_INDICATOR_INDEX,
  INITIAL_YEAR_INDEX
} from './constants';

class StatisticsManagament extends Component {
  state = {
    selectedIndicator: null,
    selectedYear: null
  };

  componentWillMount() {
    const {
      fetchIndicators, fetchYears, indicators, years, fetchAreas, areas
    } = this.props;

    if (!indicators.length) {
      fetchIndicators();
    }

    if (!years.length) {
      fetchYears();
    }

    if (!areas.length) {
      fetchAreas();
    }
  }

  componentWillReceiveProps({
    indicators, years, areas, setStatisticsWindowVisibility, fetchStatistics, showLoader
  }) {
    const { indicators: oldIndicators, years: oldYears } = this.props;

    const shouldSetInitialIndicator = isEmpty(oldIndicators) && !isEmpty(indicators);
    if (shouldSetInitialIndicator) {
      this.setState({ selectedIndicator: indicators[INITIAL_INDICATOR_INDEX].code });
    }

    const shouldSetInitialYear = isEmpty(oldYears) && !isEmpty(years);
    if (shouldSetInitialYear) {
      this.setState({ selectedYear: years[INITIAL_YEAR_INDEX] });
    }

    const shouldFetchStatistics = !isEmpty(indicators) && !isEmpty(years) && !isEmpty(areas);
    if (shouldFetchStatistics) {
      const statisticsDataRequest = {
        indicatorId: indicators[INITIAL_INDICATOR_INDEX].code,
        year: years[INITIAL_YEAR_INDEX],
        countriesIds: areas.map(area => area.countryCode)
      };

      setStatisticsWindowVisibility(true);
      fetchStatistics(statisticsDataRequest);
      showLoader();
    }
  }

  handleIndicatorChange = (indicator) => {
    this.setState({ selectedIndicator: indicator });
  };

  handleYearChange = (year) => {
    this.setState({ selectedYear: year });
  };

  handleSubmitButtonClick = () => {
    const {
      fetchStatistics, areas, setStatisticsWindowVisibility, selectArea, showLoader
    } = this.props;
    const { selectedIndicator, selectedYear } = this.state;

    const statisticsDataRequest = {
      indicatorId: selectedIndicator,
      year: selectedYear,
      countriesIds: areas.map(area => area.countryCode)
    };

    setStatisticsWindowVisibility(true);
    selectArea(null);
    fetchStatistics(statisticsDataRequest);
    showLoader();
  }

  render() {
    const { indicators, years, theme } = this.props;

    const isDataLoaded = indicators.length && years.length;
    if (!isDataLoaded) {
      return null;
    }

    return (
      <div className={theme.controlsContainer}>
        <Dropdown
          auto
          source={indicators.map(indicator => ({ value: indicator.code, label: indicator.name }))}
          value={this.state.selectedIndicator}
          onChange={this.handleIndicatorChange}
          className={theme.indicatorDropdown}
          label={INDICATOR_LABEL}
        />
        <Dropdown
          auto
          source={years.map(year => ({ value: year, label: year }))}
          value={this.state.selectedYear}
          onChange={this.handleYearChange}
          className={theme.yearDropdown}
          label={YEAR_LABEL}
        />
        <Button
          label={BUTTON_LABEL}
          raised
          primary
          onClick={this.handleSubmitButtonClick}
          className={theme.submitButton}
        />
      </div>
    );
  }
}

StatisticsManagament.propTypes = {
  fetchIndicators: PropTypes.func.isRequired,
  fetchYears: PropTypes.func.isRequired,
  indicators: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  })),
  years: PropTypes.arrayOf(PropTypes.number),
  fetchStatistics: PropTypes.func.isRequired,
  fetchAreas: PropTypes.func.isRequired,
  areas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    geoJson: PropTypes.string.isRequired
  })),
  theme: PropTypes.object.isRequired,
  setStatisticsWindowVisibility: PropTypes.func.isRequired,
  selectArea: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired
};

export default themr(COMPONENTS.STATISTICS_MANAGAMENT)(StatisticsManagament);
