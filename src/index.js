import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './main.css';
import MainApp from './MainApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainApp />, document.getElementById('terminplaner'));
registerServiceWorker();
