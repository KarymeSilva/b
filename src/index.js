import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import calcReducer from './reducers/calcReducer'
import Calc from './containers/Calc'

// El store contiene todo el árbol de estado de la aplicación
const store = createStore(calcReducer);
// Provider -> componente de orden superior proporcionado por React Redux que le permite asociar Redux a React 
render(
    <Provider store={store}>
      {/* hacemos el llamado al componente Calc*/}
      <Calc />
    </Provider>, 
    document.getElementById('root')
)
