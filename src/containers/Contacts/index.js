import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Pane } from "components";

import { useTranslation } from "react-i18next";
const Contacts = ({ viewPort: { isMobile }, ...props }) => {
  const { t } = useTranslation();
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Pane title={t("contact_form")}>test</Pane>
        </Grid>
        <Grid item xs={6}>
          <Pane title={t("contact_information")}>test</Pane>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Pane title={t("contact_map")}>test</Pane>
        </Grid>
      </Grid>
    </>
  );
};

Contacts.propTypes = {
  viewPort: PropTypes.shape({ isMobile: PropTypes.bool }),
  // : PropTypes.
};

export default Contacts;
