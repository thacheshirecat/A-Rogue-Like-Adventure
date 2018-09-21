import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <AppContainer>
        <Component/>
      </AppContainer>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
