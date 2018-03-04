import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Map from './components/Map'
import reducers from './modules'
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:40000/api/'
});

const store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(api))
);

const render = () => {
    ReactDOM.render(
      <AppContainer>
          <Provider store={store}>
            <Map />
          </Provider>
      </AppContainer>,
      document.getElementById('root'),
    )
  }

  render();