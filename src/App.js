import React from 'react';
import { Provider} from 'react-redux';
import store from './store';
import Searchware from './components/Searchware';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ShowWarehouses from './components/ShowWarehouses';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <h1>WareHouse Finder</h1>
        <Searchware />
        <Route exact path = '/showWarehouses/:id' component={ShowWarehouses}/>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
