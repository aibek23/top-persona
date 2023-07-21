import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, isAdmin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to="/unauthorized" />
      }
    />
  );
};

export default AdminRoute;