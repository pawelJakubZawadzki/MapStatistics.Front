import { ACTION_TYPES } from './constants';

const initialState = {
  areas: [],
  statistics: [],
  indicators: [],
  years: [],
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.AREAS_FETCHED: {
      return {
        ...state,
        areas: action.payload,
      };
    }
    case ACTION_TYPES.STATISTCS_FETCHED: {
      return {
        ...state,
        statistics: action.payload,
      };
    }
    case ACTION_TYPES.INDICATORS_FETCHED: {
      return {
        ...state,
        indicators: action.payload,
      };
    }
    case ACTION_TYPES.YEARS_FETCHED: {
      return {
        ...state,
        years: action.payload,
      };
    }

    default: return state;
  }
}
