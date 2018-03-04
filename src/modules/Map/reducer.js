import { ACTION_TYPES } from './constants';

const initialState = {
    areas: [],
    statistics: []
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
            return {
                ...state,
                statistics: action.payload
            };
        }

        default: return state;
    }
}
