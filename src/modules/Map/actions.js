import { ACTION_TYPES } from './constants';

export const fetchAreas = () => async (dispatch, getState, api) => {
  const response = await api.get('area');

  dispatch({
    type: ACTION_TYPES.AREAS_FETCHED,
    payload: response.data.result
  });
};

export const fetchStatistics = statisticsDataRequest => async (dispatch, getState, api) => {
  const response = await api.post('statistics/getStatistics', statisticsDataRequest);

  dispatch({
    type: ACTION_TYPES.STATISTCS_FETCHED,
    payload: {
      statistics: response.data.result,
      indicator: statisticsDataRequest.indicatorId,
      year: statisticsDataRequest.year
    }
  });
};

export const fetchIndicators = () => async (dispatch, getState, api) => {
  const response = await api.get('statistics/getIndicators');

  dispatch({
    type: ACTION_TYPES.INDICATORS_FETCHED,
    payload: response.data.result
  });
};

export const fetchYears = () => async (dispatch, getState, api) => {
  const response = await api.get('statistics/getYears');

  dispatch({
    type: ACTION_TYPES.YEARS_FETCHED,
    payload: response.data.result
  });
};

export const selectArea = areaCode => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.AREA_SELECTED,
    payload: areaCode
  });
};

export const setStatisticsWindowVisibility = isVisible => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_STATISTICS_WINDOW_VISIBILITY,
    payload: isVisible
  });
};

export const setMap = map => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_MAP,
    payload: map
  });
};

export const setZoom = zoom => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_ZOOM,
    payload: zoom
  });
};

export const hideStatisticsLackPopup = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.HIDE_STATISTICS_LACK_POPUP
  });
};

export const showLoader = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SHOW_LOADER
  });
};
