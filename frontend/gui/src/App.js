import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout.js';
import ArticleList from './containers/ArticleListView.js'

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
        
    </div>
  );
}

export default App;
