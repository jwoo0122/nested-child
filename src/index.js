import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Item from './Item'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Item
        key="1"
        id={1}
      />
      <Item
        key="2"
        id={2}
      />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
