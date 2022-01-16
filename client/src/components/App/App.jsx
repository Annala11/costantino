import React from 'react';

import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import store from '../../redux/store';

import Navigation from '../HomeViews/Navigation/Navigation';
import Home from '../HomeViews/Home/Home';

import Registration from '../ProfileView/Registration/Registration';
import Login from '../ProfileView/Login/Login';
import MyProfile from '../ProfileView/MyProfile/MyProfile';
import NewOrderСhoice from '../../components/NewOrdersViews/NewOrderСhoice/NewOrderСhoice';
import PagesStockPrice from '../PagesViews/PagesStockPrice/PagesStockPrice'
import ServicesAndPricesList from '../PagesViews/PagesServicesAndPrices/ServicesAndPricesList';
import ReviewPage from '../PagesViews/PagesRewies/ReviewPage/ReviewPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/logout" exact component={Home} />
          <Route path="/neworder" exact component={NewOrderСhoice} />
          <Route path="/servicesandprices" exact component={ServicesAndPricesList} />
          <Route path="/stockprice" exact component={PagesStockPrice} />

          <Route path="/reviews" exact component={ReviewPage} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
