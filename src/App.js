import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from "./AppStyles";
import MenuItem from "./components/MenuItem";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";
import Cart from "./components/Cart";
import ReactTooltip from "react-tooltip";

export default () => {
  const name = useSelector((state) => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Home" icon="/assets/store.png" link="/"></MenuItem>
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders"></MenuItem>
          <MenuItem
            title="Meu Perfil"
            icon="/assets/profile.png"
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
