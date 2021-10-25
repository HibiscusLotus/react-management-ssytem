import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoutes } from './router/router';
import * as serviceWorker from './serviceWorker';
import './assets/css/common.css';


ReactDOM.render(<AppRoutes />, document.getElementById('root'));

serviceWorker.unregister();