import React from 'react';
import ReactDom from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);

registerServiceWorker();
