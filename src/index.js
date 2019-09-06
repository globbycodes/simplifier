import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home';
import * as serviceWorker from './serviceWorker';
import './styles/main.css';
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
