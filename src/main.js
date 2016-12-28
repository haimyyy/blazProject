import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './rootReducer'
import App from './App'
const middleware = [ thunk ]
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)



render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)