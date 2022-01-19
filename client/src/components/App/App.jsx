import React from 'react';

import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import store from '../../redux/store';
import './App.css';
import Navigation from '../HomeViews/Navigation/Navigation';
import Home from '../HomeViews/Home/Home';
import Registration from '../ProfileView/Registration/Registration';
import Login from '../ProfileView/Login/Login';
import MyProfile from '../ProfileView/MyProfile/MyProfile';
import NewOrderСhoice from '../../components/NewOrdersViews/NewOrderСhoice/NewOrderСhoice';
import PagesStockPrice from '../PagesViews/PagesStockPrice/PagesStockPrice'
import ServicesAndPricesList from '../PagesViews/PagesServicesAndPrices/ServicesAndPricesList';
import ReviewPage from '../PagesViews/PagesRewies/ReviewPage/ReviewPage';
import LoginAndInitWrapper from '../LoginAndInitWrapper/LoginAndInitWrapper';
import MyOrders from '../ProfileView/MyOrders/MyOrders';
import Logout from '../ProfileView/Logout/Logout.jsx';
import Footer from '../HomeViews/Footer/Footer';
import SpecialistsList from '../PagesViews/PagesSpecialists/SpecialistsList';

function App() {
  return (
    <Provider store={store}>
      <LoginAndInitWrapper>
        <BrowserRouter>
          <Navigation />
          <div className="mainContainer">

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home"  component={Home} />
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={MyProfile} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/neworder" component={NewOrderСhoice} />
              <Route path="/servicesandprices" exact component={ServicesAndPricesList} />  
              <Route path="/servicesandprices/:catid" component={ServicesAndPricesList} />
              <Route path="/stockprice" component={PagesStockPrice} />
              <Route path="/reviews" component={ReviewPage} />
              <Route path="/orders" component={MyOrders} />
              <Route path="/spec" exact component={SpecialistsList} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </LoginAndInitWrapper>
    </Provider>

  );
}

export default App;
