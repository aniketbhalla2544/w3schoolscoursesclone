import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import TotalFavCourses from 'context/TotalFavCourses';




ReactDOM.render(
  <React.StrictMode>
    <TotalFavCourses>
      <App />
    </TotalFavCourses>
  </React.StrictMode>,
  document.getElementById('root')
);
