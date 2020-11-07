/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Switch } from "react-router-dom";
import List from "../containers/List";
import Details from "../containers/Details";

const ROUTES = [
  { path: "/", key: "root", exact: true, component: () => <List /> },
  {
    path: "/card",
    key: "cardDetails",
    component: () => <Details />,
  },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      {/* <Route component={() => <NotFound />} /> */}
    </Switch>
  );
}
