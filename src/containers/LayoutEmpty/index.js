import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";

import MobileScreen from "../MobileScreen";
import style from "./style.scss";

const LayoutEmpty = ({
  myPermissionsSelector,
  children,
  viewPort,
  userIsMaster,
  currentUserData,
  currentLocalization,
  classes = {},
  ...rest
}) => {
  const { isMobile } = viewPort;

  const [isEndOfPage, setEndOfPage] = React.useState(false);
  const restWithPermissons = {
    viewPort,
    isEndOfPage,
    currentLocalization,
    ...rest,
  };

  return !isMobile ? (
    <Container maxWidth="lg" classes={{ root: style.root }}>
      {React.createElement(children, restWithPermissons)}
    </Container>
  ) : (
    <MobileScreen />
  );
};

LayoutEmpty.propTypes = {
  classes: PropTypes.object.isRequired,
  viewPort: PropTypes.shape({ isMobile: PropTypes.bool.isRequired }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  myPermissionsSelector: PropTypes.object,
  userIsMaster: PropTypes.bool.isRequired,
  currentUserData: PropTypes.object.isRequired,
  currentLocalization: PropTypes.string,
};

export default LayoutEmpty;
