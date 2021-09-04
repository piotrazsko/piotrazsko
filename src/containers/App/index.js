import React, { Fragment } from "react";
import { Routing } from "containers";
import routes, { redirectAuthPath } from "routes";

const App = ({ ...props }) => {
  return (
    <Fragment>
      <Routing routes={routes} redirectUrl={redirectAuthPath} />
    </Fragment>
  );
};

export default App;
