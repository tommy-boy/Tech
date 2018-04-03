import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import './index.css';
import Root  from './components/Root'

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();