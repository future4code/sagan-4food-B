import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import AdressEditPage from "../AdressEditPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import AdressRegisterPage from "../AdressRegisterPage";
import FeedPage from "../FeedPage";
import ProfilePage from "../ProfilePage";
import ProfileEditPage from "../ProfileEditPage";
import CartPage from "../CartPage";
import RestaurantPage from "../RestaurantPage";

export const routes = {
  login: '/',
  signup: '/signup',
  adressRegister: '/adressRegister',
  feed: '/feed',
  restaurant: '/restaurant',
  profile: '/profile',
  profileEdit: '/profileEdit',
  adressEdit: '/adressEdit',
  cart: '/cart'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={() => <LoginPage/>} />
        <Route exact path={routes.signup} component={() => <SignupPage/>} />
        <Route exact path={routes.adressRegister} component={() => <AdressRegisterPage/>} />
        <Route exact path={routes.feed} component={() => <FeedPage/>} />
        <Route exact path={routes.restaurant} component={() => <RestaurantPage/>} />
        <Route exact path={routes.profile} component={() => <ProfilePage/>} />
        <Route exact path={routes.profileEdit} component={() => <ProfileEditPage/>} />
        <Route exact path={routes.adressEdit} component={() => <AdressEditPage/>} />
        <Route exact path={routes.cart} component={() => <CartPage/>} />
        <Route path='*' component={() => 'Página não encontrada'} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
