import { createSelector } from 'reselect';
import { isEmpty, orderBy } from 'lodash';

export const selectAreas = state => state.map.areas;

export const selectStatistics = state => state.map.statistics;

export const selectIndicators = state => state.map.indicators;

export const selectYears = state => state.map.years;

export const selectSelectedArea = state => state.map.selectedArea;

export const selectSelctedYear = state => state.map.selectedYear;

export const selectSelectedIndicator = state => state.map.selectedIndicator;

export const selectIsStatisticsWindowVisible = state => state.map.isStatisticsWindowVisible;

export const selectMap = state => state.map.map;

export const selectZoom = state => state.map.zoom;

export const selectIsStatisticsLackPopupVisible = state => state.map.isStatisticsLackPopupVisible;

export const selectIsLoaderVisible = state => state.map.isLoaderVisible;

export const selectAreaStatistics = createSelector(
  selectStatistics,
  selectAreas,
  (statistics, areas) => {
    if (isEmpty(areas) || isEmpty(statistics)) {
      return [];
    }

    const areaStatistics = statistics.map(statisticsItem => ({
      statisticsValue: statisticsItem.value,
      code: statisticsItem.countryCode,
      name: areas.find(area => area.countryCode === statisticsItem.countryCode).name
    }));

    const parsedString = parseFloat(areaStatistics[0].statisticsValue);

    if (!Number.isNaN(parsedString)) {
      return orderBy(areaStatistics, area => parseFloat(area.statisticsValue), 'desc');
    }

    return orderBy(areaStatistics, area => area.statisticsValue, 'desc');
  },
);

export const selectSelectedAreaStatistics = createSelector(
  selectSelectedArea,
  selectAreas,
  selectStatistics,
  selectSelctedYear,
  selectSelectedIndicator,
  selectIndicators,
  (selectedArea, areas, statistics, year, selectedIndicator, indicators) => {
    if (isEmpty(areas) || isEmpty(indicators) || isEmpty(statistics) || !selectedArea) {
      return {};
    }

    return {
      name: areas.find(area => area.countryCode === selectedArea).name,
      indicatorName: indicators.find(indicator => indicator.code === selectedIndicator).name,
      year,
      value: statistics.find(statisticsItem => statisticsItem.countryCode === selectedArea).value,
      geoJson: areas.find(area => area.countryCode === selectedArea).geoJson
    };
  },
);

