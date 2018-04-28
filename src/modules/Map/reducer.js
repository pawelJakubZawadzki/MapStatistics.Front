import isEmpty from 'lodash/isEmpty';
import { ACTION_TYPES } from './constants';

const initialState = {
  areas: [],
  statistics: [],
  indicators: [],
  years: [],
  selectedArea: null,
  selectedYear: null,
  selectedIndicator: null,
  isStatisticsWindowVisible: false,
  isStatisticsLackPopupVisible: false,
  isLoaderVisible: true
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.AREAS_FETCHED: {
      return {
        ...state,
        areas: action.payload
      };
    }
    case ACTION_TYPES.STATISTCS_FETCHED: {
      if (isEmpty(action.payload.statistics)) {
        return {
          ...state,
          isStatisticsLackPopupVisible: true,
          isLoaderVisible: false
        };
      }

      return {
        ...state,
        statistics: action.payload.statistics,
        selectedYear: action.payload.year,
        selectedIndicator: action.payload.indicator,
        isLoaderVisible: false
      };
    }
    case ACTION_TYPES.INDICATORS_FETCHED: {
      return {
        ...state,
        indicators: action.payload
      };
    }
    case ACTION_TYPES.YEARS_FETCHED: {
      return {
        ...state,
        years: action.payload
      };
    }
    case ACTION_TYPES.AREA_SELECTED: {
      return {
        ...state,
        selectedArea: action.payload
      };
    }
    case ACTION_TYPES.SET_STATISTICS_WINDOW_VISIBILITY: {
      return {
        ...state,
        isStatisticsWindowVisible: action.payload
      };
    }
    case ACTION_TYPES.SET_MAP: {
      return {
        ...state,
        map: action.payload
      };
    }
    case ACTION_TYPES.SET_ZOOM: {
      return {
        ...state,
        zoom: action.payload
      };
    }
    case ACTION_TYPES.HIDE_STATISTICS_LACK_POPUP: {
      return {
        ...state,
        isStatisticsLackPopupVisible: false
      };
    }
    case ACTION_TYPES.SHOW_LOADER: {
      return {
        ...state,
        isLoaderVisible: true
      };
    }

    default: return state;
  }
}
