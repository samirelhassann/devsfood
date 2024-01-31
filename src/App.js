import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from "./AppStyles";
import MenuItem from "./components/MenuItem";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";
import Cart from "./components/Cart";
import ReactTooltip from "react-tooltip";

import storeImage from "./assets/store.png";
import orderImage from "./assets/order.png";
import profileImage from "./assets/profile.png";

export default () => {
  const basePath = process.env.REACT_APP_BASENAME || '';

  return (
    <BrowserRouter basename={basePath}>
      <Container>
        <Menu>
          <MenuItem title="Home" icon={storeImage} link="/"></MenuItem>
          <MenuItem title="Pedidos" icon={orderImage} link="/orders"></MenuItem>
          <MenuItem
            title="Meu Perfil"
            icon={profileImage}
            link="/profile"
          ></MenuItem>
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PrivateRoute path="/orders">
              <div>TEKA DE PEDIDOS</div>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <div>TEKA DO PROFILE</div>
            </PrivateRoute>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Cart />
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};
