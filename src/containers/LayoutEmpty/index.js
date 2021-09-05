import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";

import MobileScreen from "../MobileScreen";
import style from "./style.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Profile, Header } from "components";

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
      <Grid container spacing={2}>
        <Grid item md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item md={8} lg={9}>
          <Header {...restWithPermissons} />
          <Grid container>
            <Grid item xs={12}>
              <Paper>{React.createElement(children, restWithPermissons)}</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
