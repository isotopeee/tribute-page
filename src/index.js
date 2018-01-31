import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
