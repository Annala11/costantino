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
import PagesStockPrice from '../PagesViews/PagesStockPrice/PagesStockPrice'
import ServicesAndPricesList from '../PagesViews/PagesServicesAndPrices/ServicesAndPricesList';
import ReviewPage from '../PagesViews/PagesRewies/ReviewPage/ReviewPage';
import LoginAndInitWrapper from '../LoginAndInitWrapper/LoginAndInitWrapper';
import Logout from '../ProfileView/Logout/Logout.jsx';
import AdminPage from '../ProfileView/Admin/AdminPage/AdminPage';
import Footer from '../HomeViews/Footer/Footer';
import SpecialistsList from '../PagesViews/PagesSpecialists/SpecialistsList';
import NewOrder from '../NewOrdersViews/NewOrder/NewOrder';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PagesContact from '../PagesViews/PagesContact/PagesContact';
import ReactNotification from 'react-notifications-component';

function App() {
  return (
    <Provider store={store}>
      <LoginAndInitWrapper>
        <ReactNotification />
        <BrowserRouter>
          <ScrollToTop />
          <Navigation />
          <div className="mainContainer">

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Route path="/myprofile" component={MyProfile} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/servicesandprices" exact component={ServicesAndPricesList} />
              <Route path="/admin" exact component={AdminPage} />
              <Route path="/servicesandprices/:catid" component={ServicesAndPricesList} />
              <Route path="/stockprice" component={PagesStockPrice} />
              <Route path="/reviews" component={ReviewPage} />
              <Route path="/neworder" component={NewOrder} />
              <Route path="/spec" exact component={SpecialistsList} />
              <Route path="/contacts" exact component={PagesContact} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </LoginAndInitWrapper>
    </Provider>

  );
}

export default App;
