import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { document } from 'global/window';
import MapStatistics from './components/MapStatistics';
import reducers from './modules';

const api = axios.create({
  baseURL: 'http://localhost:40000/api/',
});

const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(api)),
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MapStatistics />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();
