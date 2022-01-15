import React from 'react';

import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import store from '../../redux/store';

import Navigation from '../HomeViews/Navigation/Navigation';
import Home from '../HomeViews/Home/Home';
import Registration from '../ProfileView/Registration/Registration';
import Login from '../ProfileView/Login/Login';
import NewOrderСhoice from '../../components/NewOrdersViews/NewOrderСhoice/NewOrderСhoice';
import PagesServicesAndPrices from '../PagesViews/PagesServicesAndPrices/PagesServicesAndPrices';
import PagesStockPrice from '../PagesViews/PagesStockPrice/PagesStockPrice'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/logout" exact component={Home} />
          <Route path="/neworder" exact component={NewOrderСhoice} />
          <Route path="/servicesandprices" exact component={PagesServicesAndPrices} />
          <Route path="/stockprice" exact component={PagesStockPrice} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
