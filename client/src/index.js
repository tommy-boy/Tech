import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import './index.css';
import Root  from './components/Root'

ReactDOM.render((
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>
    ), document.getElementById('root'));
registerServiceWorker();
