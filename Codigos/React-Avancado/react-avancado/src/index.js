import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './error-boundaries/ErrorBoundary';
import App from './structure-project/App';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
