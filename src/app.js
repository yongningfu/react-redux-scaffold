import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import App from './components/App'
import C_APP from './containers/C_App'

let store = createStore(reducer, applyMiddleware(thunk))

render(<Provider store={store}>
        <C_APP />
    </Provider>,
    document.getElementById('root')
);