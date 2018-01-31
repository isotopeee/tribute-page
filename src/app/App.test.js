import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Object.values pollyfill
Object.values = obj => Object.keys(obj).map(key => obj[key]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
