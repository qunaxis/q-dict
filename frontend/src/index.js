import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/app.css'

import store from './store/store'

render(
  <div className='app'>
    <App store={ store }/>
  </div>,
  document.getElementById('root')
)
