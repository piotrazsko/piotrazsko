import React, { Fragment } from "react";
import { Routing } from "containers";
import routes, { redirectAuthPath } from "routes";
import "../../style/style.common.scss";
import "../../assets/fonts/stylesheet.css";
import "modules/i18next";
const App = ({ ...props }) => {
  return (
    <Fragment>
      <Routing routes={routes} redirectUrl={redirectAuthPath} />
    </Fragment>
  );
};

export default App;
