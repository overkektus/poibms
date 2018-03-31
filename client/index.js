import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './register-service-worker';
import App from './App';

import '../node_modules/semantic/dist/semantic.min.css';

const rootElement = document.getElementById('root');

render(<App />, rootElement);
registerServiceWorker();
