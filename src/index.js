import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import ErrorCatch from './components/ErrorCatch';
import AnimeService from './services/AnimeService';
import { AnimeServiceProvider } from './contexts';
import './index.css';

import store from './store';

const animeService = new AnimeService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorCatch>
      <AnimeServiceProvider value={animeService}>
        <App />
      </AnimeServiceProvider>
    </ErrorCatch>
  </Provider>,
  document.getElementById('root')
);
