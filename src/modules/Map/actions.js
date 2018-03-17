import { ACTION_TYPES } from './constants';

export const fetchAreas = () => async (dispatch, getState, api) => { //eslint-disable-line
  // const dataFromApi = await api.get('area/get');

  const data = [
    { name: 'Poland', geoJson: '[[15.016996,51.106674],[14.607098,51.745188],[14.685026,52.089947],[14.4376,52.62485],[14.074521,52.981263],[14.353315,53.248171],[14.119686,53.757029],[14.8029,54.050706],[16.363477,54.513159],[17.622832,54.851536],[18.620859,54.682606],[18.696255,54.438719],[19.66064,54.426084],[20.892245,54.312525],[22.731099,54.327537],[23.243987,54.220567],[23.484128,53.912498],[23.527536,53.470122],[23.804935,53.089731],[23.799199,52.691099],[23.199494,52.486977],[23.508002,52.023647],[23.527071,51.578454],[24.029986,50.705407],[23.922757,50.424881],[23.426508,50.308506],[22.51845,49.476774],[22.776419,49.027395],[22.558138,49.085738],[21.607808,49.470107],[20.887955,49.328772],[20.415839,49.431453],[19.825023,49.217125],[19.320713,49.571574],[18.909575,49.435846],[18.853144,49.49623],[18.392914,49.988629],[17.649445,50.049038],[17.554567,50.362146],[16.868769,50.473974],[16.719476,50.215747],[16.176253,50.422607],[16.238627,50.697733],[15.490972,50.78473],[15.016996,51.106674]]', countryCode: 'pl' },
    { name: 'Germany', geoJson: '[[9.921906,54.983104],[9.93958,54.596642],[10.950112,54.363607],[10.939467,54.008693],[11.956252,54.196486],[12.51844,54.470371],[13.647467,54.075511],[14.119686,53.757029],[14.353315,53.248171],[14.074521,52.981263],[14.4376,52.62485],[14.685026,52.089947],[14.607098,51.745188],[15.016996,51.106674],[14.570718,51.002339],[14.307013,51.117268],[14.056228,50.926918],[13.338132,50.733234],[12.966837,50.484076],[12.240111,50.266338],[12.415191,49.969121],[12.521024,49.547415],[13.031329,49.307068],[13.595946,48.877172],[13.243357,48.416115],[12.884103,48.289146],[13.025851,47.637584],[12.932627,47.467646],[12.62076,47.672388],[12.141357,47.703083],[11.426414,47.523766],[10.544504,47.566399],[10.402084,47.302488],[9.896068,47.580197],[9.594226,47.525058],[8.522612,47.830828],[8.317301,47.61358],[7.466759,47.620582],[7.593676,48.333019],[8.099279,49.017784],[6.65823,49.201958],[6.18632,49.463803],[6.242751,49.902226],[6.043073,50.128052],[6.156658,50.803721],[5.988658,51.851616],[6.589397,51.852029],[6.84287,52.22844],[7.092053,53.144043],[6.90514,53.482162],[7.100425,53.693932],[7.936239,53.748296],[8.121706,53.527792],[8.800734,54.020786],[8.572118,54.395646],[8.526229,54.962744],[9.282049,54.830865],[9.921906,54.983104]]', countryCode: 'de' }
  ];


  dispatch({
    type: ACTION_TYPES.AREAS_FETCHED,
    payload: data
  });
};

export const fetchStatistics = statisticsDataRequest => async (dispatch, getState, api) => { //eslint-disable-line
  // const dataFromApi = await api.get('statistics/getStatistics', statisticsDataRequest);

  const data = [
    {
      indicatorId: 'IDX.HDI', value: '110', year: '2012', countryCode: 'pl'
    },
    {
      indicatorId: 'IDX.HDI', value: '550', year: '2012', countryCode: 'de'
    }
    // {
    //   indicatorId: 'IDX.HDI', value: '100', year: '2011', countryCode: 'pl'
    // },
    // {
    //   indicatorId: 'IDX.HDI', value: '500', year: '2011', countryCode: 'de'
    // },
    // {
    //   indicatorId: '6.0.GDP_growth', value: '20', year: '2012', countryCode: 'pl'
    // },
    // {
    //   indicatorId: '6.0.GDP_growth', value: '80', year: '2012', countryCode: 'de'
    // },
    // {
    //   indicatorId: '6.0.GDP_growth', value: '15', year: '2011', countryCode: 'pl'
    // },
    // {
    //   indicatorId: '6.0.GDP_growth', value: '70', year: '2011', countryCode: 'de'
    // }
  ];

  dispatch({
    type: ACTION_TYPES.STATISTCS_FETCHED,
    payload: {
      statistics: data,
      indicator: statisticsDataRequest.indicatorId,
      year: statisticsDataRequest.year
    }
  });
};

export const fetchIndicators = () => async (dispatch, getState, api) => { //eslint-disable-line
  // const dataFromApi = await api.get('statistics/getIndicators');

  const data = [
    { code: 'IDX.HDI', name: 'Human Development Index' },
    { code: '6.0.GDP_growth', name: 'GDP growth (annual %)' }
  ];


  dispatch({
    type: ACTION_TYPES.INDICATORS_FETCHED,
    payload: data
  });
};

export const fetchYears = () => async (dispatch, getState, api) => { //eslint-disable-line
  // const dataFromApi = await api.get('statistics/getYears');

  const data = [2012, 2011];

  dispatch({
    type: ACTION_TYPES.YEARS_FETCHED,
    payload: data
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
