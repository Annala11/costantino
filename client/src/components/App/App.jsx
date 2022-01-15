import React from 'react';

import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import store from '../../redux/store';

import Navigation from '../HomeViews/Navigation/Navigation';
import Home from '../HomeViews/Home/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
