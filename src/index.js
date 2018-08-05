import React from 'react';
import ReactDOM from 'react-dom';
import Counter3 from './component/Counter2';
import {createStore} from 'redux';
import counter from './reducers/counter';
import {Provider} from 'react-redux';

let store = createStore(counter);

ReactDOM.render(
    <Provider store={store}><Counter3/></Provider>,
    document.querySelector('#root')
);